<template>
  <DashboardTemplate />
</template>

<script lang="ts">
import Vue from 'vue'
import { auth } from '@/store'

export default Vue.extend({
  middleware: ['auth'],
})
</script>

<style scoped></style>
