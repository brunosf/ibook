import { Plugin } from '@nuxt/types'
import { initializeAxios, initializeCookies } from '@/utils/nuxt-instance'

const accessor: Plugin = ({ $axios, app }) => {
  initializeAxios($axios)
  initializeCookies(app.$cookie)
}

export default accessor
