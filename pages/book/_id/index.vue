<template>
  <BookDetailsTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { books } from '@/store'

export default Vue.extend({
  layout: 'ibook',
  async asyncData({ params, error }) {
    try {
      const book = await books.show({ id: params.id as any })
      if (!book) {
        throw new Error('Book not found.')
      }
    } catch (e) {
      error({ statusCode: 404, message: e.message })
    }
  },
  head() {
    return {
      title: books.$single.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: books.$single.description,
        },
      ],
    }
  },
})
</script>

<style scoped></style>
