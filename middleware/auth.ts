import { Middleware } from '@nuxt/types'

const authMiddleware: Middleware = ({ store, redirect, app, route }) => {
  const authenthicated =
    app.$cookies.get('token') || store.getters['auth/$accessToken']

  if (!authenthicated) {
    if (route.name === 'login') {
      return
    }
    return redirect({ name: 'login' })
  }

  if (authenthicated && route.name === 'login') {
    return redirect({ name: 'index' })
  }
}

export default authMiddleware
