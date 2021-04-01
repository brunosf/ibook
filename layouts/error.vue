<template>
  <div class="error-layout">
    <img src="@/assets/img/404.svg" alt="Erro 404" />
    <p>
      A página que você está procurando <br />
      não existe ou foi removida
    </p>
    <NuxtLink to="/">Voltar para Home</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.error-layout {
  width: 100%;
  height: 100vh;
  background: #292929;
  color: #f7f7f7;
  display: grid;
  grid-auto-flow: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  grid-gap: 30px;
  text-align: center;
  justify-items: center;

  p {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.5;
  }

  a {
    background-color: #f7f7f7;
    color: #292929;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
