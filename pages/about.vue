<template>
  <AboutTemplate />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'ibook',
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px;
  grid-auto-flow: column;
  grid-gap: 0.5rem;

  @include screen('small', 'medium') {
    grid-template-columns: 1fr;
  }

  .box {
    background-color: color('dark', 'darkest');
  }
}
</style>
