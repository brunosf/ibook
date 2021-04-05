<template>
  <div class="login-template">
    <div class="wrapper">
      <div class="logo">
        <img src="@/assets/img/logo.svg" />
      </div>
      <p>
        Bem-vindo(a) ao Dashboard <br />
        <b>Entre na sua conta</b>
      </p>
      <form class="login-form" @submit.prevent>
        <input
          v-model="form.email"
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <input
          v-model="form.password"
          type="password"
          name="password"
          placeholder="Senha"
        />
        <button type="submit" @click="onSubmit">
          <span v-show="!loading">Entrar</span>
          <span v-show="loading">loading ...</span>
        </button>
      </form>
    </div>

    <p :v-model="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      loading: false,
      error: '',
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true

        this.validationFields()
        if (this.error) {
          throw new Error(this.error)
        }

        await auth.create(this.form)

        this.$router.push({ name: 'dashboard' })
      } catch (error) {
        this.loading = false
        if (!this.error) {
          this.error = 'E-mail ou senha inválidos.'
        }
      }
    },
    validationFields() {
      if (!this.form.email.trim()) {
        this.error = 'O campo e-mail não pode ser vazio.'
        return
      }
      if (!this.form.password.trim()) {
        this.error = 'O campo senha não pode ser vazio.'
        return
      }
      this.error = ''
    },
  },
})
</script>

<style lang="scss" scoped>
.login-template {
  display: grid;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-content: center;

  .wrapper {
    display: grid;
    gap: 30px;
    width: 400px;
    padding: 80px 50px;
    background-color: #292929;
    color: #fff;
    font-size: 18px;
  }

  .logo {
    max-width: 100px;

    img {
      width: 100%;
    }
  }

  .login-form {
    display: grid;
    gap: 10px;

    input {
      border: 1px solid #7e7a7a;
      padding: 8px 15px;
      border-radius: 20px;
      background-color: transparent;
      transition: all 0.2s;
      color: #fff;

      &::placeholder {
        color: #7e7a7a;
      }

      &:hover {
        border-color: #fff;
      }
    }

    button {
      margin-top: 5px;
      padding: 0.5rem 1rem;
      border-radius: 5rem;
      background-color: #f7f7f7;
      color: #292929;
      transition: all 0.3s ease;
      font-size: 1.1rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
