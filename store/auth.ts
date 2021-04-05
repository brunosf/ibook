import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { $cookies, $axios } from '@/utils/nuxt-instance'

type credentials = {
  email: string
  password: string
}
@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private accessToken: string | null = ''

  public get $accessToken() {
    return this.accessToken
  }

  @Mutation
  SET_ACCESS_TOKEN(token: string) {
    this.accessToken = token
  }

  @Mutation
  DESTROY_ACCESS_TOKEN() {
    this.accessToken = null
  }

  @Action({ commit: 'SET_ACCESS_TOKEN' })
  public async create(data: credentials) {
    const { accessToken } = await $axios.$post('/login', data)
    $cookies.set('token', accessToken)
    return accessToken
  }

  @Action({ commit: 'DESTROY_ACCESS_TOKEN' })
  public destroy() {
    $cookies.remove('token')
  }
}
