import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { $cookie } from '@/utils/nuxt-instance'

@Module({ name: 'auth', stateFactory: true, namespaced: true })
export default class Auth extends VuexModule {
  private accessToken = ''

  public get $accessToken() {
    return this.accessToken
  }

  @Mutation
  SET_ACCESS_TOKEN(token: string) {
    this.accessToken = token
  }

  @Mutation
  DESTROY_ACCESS_TOKEN() {
    this.accessToken = ''
  }

  @Action({ commit: 'SET_ACCESS_TOKEN' })
  public create(token: string) {
    return token
  }

  @Action({ commit: 'DESTROY_ACCESS_TOKEN' })
  public destroy() {}
}
