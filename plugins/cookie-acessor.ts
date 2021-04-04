// import { Plugin } from '@nuxt/types'
// import { NuxtCookies } from 'cookie-universal-nuxt'

// declare module 'vuex/types/index' {
//   // this.$myInjectedFunction dentro de stores Vuex
//   interface Store<S> {
//     $cookie: NuxtCookies
//   }
// }

// // eslint-disable-next-line import/no-mutable-exports
// let $cookie: NuxtCookies

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const cookieAcessor: Plugin = (
//   { $cookie: cookieInstance },
//   inject: any
// ): void => {
//   // return function () {
//   $cookie = cookieInstance
//   inject('cookie', () => $cookie)
//   // }
// }

// export { $cookie }

// export default cookieAcessor

import { Plugin } from '@nuxt/types'
import { initializeCookies } from '~/utils/nuxt-instance'

// declare module 'vue/types/vue' {
//   interface Vue {
//     $cookie: NuxtCookies
//   }
// }

// declare module '@nuxt/types' {
//   // nuxtContext.app.$myInjectedFunction dentro de asyncData, fetch, plugins, middleware, nuxtServerInit
//   interface NuxtAppOptions {
//     $cookie: NuxtCookies
//   }
//   // nuxtContext.$myInjectedFunction
//   interface Context {
//     $cookie: NuxtCookies
//   }
// }

const accessor: Plugin = ({ app }) => {
  initializeCookies(app.$cookie)
}

export default accessor
