import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '@/utils/api'

interface Show {
  id: Book['id']
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book

  public get $all() {
    return this.books
  }

  public get $single() {
    return this.book
  }

  @Mutation
  private SET_ALL(books: Book[]) {
    this.books = books
  }

  @Mutation
  private SET_SINGLE(book: Book) {
    this.book = book
  }

  @Action({ commit: 'SET_ALL' })
  public async index() {
    return await $axios.$get('/books')
  }

  @Action({ commit: 'SET_SINGLE' })
  public async show({ id }: Show) {
    return await $axios.$get(`/books/${id}`)
  }
}
