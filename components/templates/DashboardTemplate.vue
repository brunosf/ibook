<template>
  <div class="dashboard-template">
    <div class="wrapper">
      <img src="@/assets/img/dashboard.svg" />
      <h1>Você está no <b>Dashboard</b></h1>
      <button @click="logout">Logout</button>
      <NuxtLink to="/">Home</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  methods: {
    logout() {
      auth.destroy()
      this.$router.push({ name: 'login' })
    },
  },
})
</script>

<style lang="scss" scoped>
.dashboard-template {
  display: grid;
  width: 100%;
  height: 100vh;
  justify-content: center;

  align-content: center;

  .wrapper {
    display: grid;
    justify-items: center;
    gap: 30px;

    .logo {
      max-width: 100px;

      img {
        width: 100%;
      }
    }

    h1 {
      font-weight: 400;
      font-size: 30px;
    }

    button {
      background-color: #292929;
      color: #f7f7f7;
      font-size: 1.3rem;
      font-weight: 500;
      padding: 0.5rem 1rem;
      transition: all 0.3s ease;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
