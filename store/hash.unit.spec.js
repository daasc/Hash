/* eslint-disable import/no-named-as-default-member */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations, getters, actions } from '@/store/hash.js'

jest.mock('axios')

const storeConfig = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
describe('Hash', () => {
  const createStore = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(storeConfig)
    return { store }
  }
  it('should return the value ', () => {
    const { store } = createStore()
    expect(store.state.hash).toEqual({
      x: [],
      y: [],
      z: [],
    })
  })
  it('should make a play on the hash when PLAY is called', () => {
    const { store } = createStore()
    store.commit('PLAY', { move: 'x', index: 1, value: 'X' })
    expect(store.state.hash.x[1]).toBe('X')
  })
})
