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
  it('should return the value hash', () => {
    const { store } = createStore()
    expect(store.state.hash).toEqual({
      x: [],
      y: [],
      z: [],
    })
  })
  it('should return the value result', () => {
    const { store } = createStore()
    expect(store.state.result).toEqual(null)
  })
  it('should make a play on the hash when PLAY is called', () => {
    const { store } = createStore()
    store.commit('PLAY', { move: 'x', index: 1, value: 'X' })
    expect(store.state.hash.x[1]).toBe('X')
  })
  it('should to be false the value of the result when CHECK_PLAY is called', () => {
    const { store } = createStore()
    store.commit('PLAY', { move: 'x', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'x', index: 1, value: '0' })
    store.commit('PLAY', { move: 'x', index: 2, value: 'x' })
    store.commit('PLAY', { move: 'y', index: 0, value: '0' })
    store.commit('PLAY', { move: 'y', index: 1, value: '0' })
    store.commit('PLAY', { move: 'y', index: 2, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 1, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 2, value: '0' })
    store.commit('CHECK_PLAY')
    expect(store.state.result).toBe(false)
  })

  it('should to be tue the value of the result when CHECK_PLAY is called', () => {
    const { store } = createStore()
    store.commit('PLAY', { move: 'x', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'x', index: 1, value: 'x' })
    store.commit('PLAY', { move: 'x', index: 2, value: 'x' })
    store.commit('PLAY', { move: 'y', index: 0, value: '0' })
    store.commit('PLAY', { move: 'y', index: 1, value: '0' })
    store.commit('PLAY', { move: 'y', index: 2, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 1, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 2, value: '0' })
    store.commit('CHECK_PLAY')
    expect(store.state.result).toBe(true)
  })
  it('should to be tue the value of the result when CHECK_PLAY is called', () => {
    const { store } = createStore()
    store.commit('PLAY', { move: 'x', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'x', index: 1, value: 'x' })
    store.commit('PLAY', { move: 'x', index: 2, value: '0' })
    store.commit('PLAY', { move: 'y', index: 0, value: '0' })
    store.commit('PLAY', { move: 'y', index: 1, value: '0' })
    store.commit('PLAY', { move: 'y', index: 2, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 0, value: '0' })
    store.commit('PLAY', { move: 'z', index: 1, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 2, value: '0' })
    store.commit('CHECK_PLAY')
    expect(store.state.result).toBe(true)
  })

  it('should to be tue the value of the result when CHECK_PLAY is called', () => {
    const { store } = createStore()
    store.commit('PLAY', { move: 'x', index: 0, value: '0' })
    store.commit('PLAY', { move: 'x', index: 1, value: '0' })
    store.commit('PLAY', { move: 'x', index: 2, value: '0' })
    store.commit('PLAY', { move: 'y', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'y', index: 1, value: 'x' })
    store.commit('PLAY', { move: 'y', index: 2, value: '0' })
    store.commit('PLAY', { move: 'z', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 1, value: '0' })
    store.commit('PLAY', { move: 'z', index: 2, value: 'x' })
    store.commit('CHECK_PLAY')
    expect(store.state.result).toBe(true)
  })

  it('should to be tue the value of the result when CHECK_PLAY is called', () => {
    const { store } = createStore()
    store.commit('PLAY', { move: 'x', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'x', index: 1, value: 'x' })
    store.commit('PLAY', { move: 'x', index: 2, value: '0' })
    store.commit('PLAY', { move: 'y', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'y', index: 1, value: '0' })
    store.commit('PLAY', { move: 'y', index: 2, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'z', index: 1, value: '0' })
    store.commit('PLAY', { move: 'z', index: 2, value: '0' })
    store.commit('CHECK_PLAY')

    expect(store.state.result).toBe(true)
  })

  it('should to be tue the value of the result when CHECK_PLAY is called', () => {
    const { store } = createStore()
    store.commit('PLAY', { move: 'x', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'x', index: 1, value: '0' })
    store.commit('PLAY', { move: 'x', index: 2, value: '0' })
    store.commit('PLAY', { move: 'y', index: 0, value: 'x' })
    store.commit('PLAY', { move: 'y', index: 1, value: 'x' })
    store.commit('PLAY', { move: 'y', index: 2, value: '0' })
    store.commit('PLAY', { move: 'z', index: 0, value: '0' })
    store.commit('PLAY', { move: 'z', index: 1, value: '0' })
    store.commit('PLAY', { move: 'z', index: 2, value: 'x' })
    store.commit('CHECK_PLAY')

    expect(store.state.result).toBe(true)
  })
})
