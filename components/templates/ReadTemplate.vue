<template>
  <div class="read-template">
    <h2>{{ $book.title }}</h2>

    <BookRead />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  computed: {
    $book() {
      return books.$single
    },
  },
})
</script>

<style lang="scss" scoped>
.read-template {
  display: grid;
  grid-gap: 4rem;
}
</style>
