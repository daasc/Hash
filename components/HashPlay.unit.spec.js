/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '@/store/hash.js'
import HashPlay from '@/components/HashPlay.vue'

describe('HashPlay', () => {
  const hashPlayMount = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        hash: {
          state,
          namespaced: true,
        },
      },
    })
    const wrapper = mount(HashPlay, {
      mocks: {
        $store: store,
      },
      localVue,
    })
    return { store, wrapper }
  }
  it('should mount the components ', () => {
    const { wrapper } = hashPlayMount()
    expect(wrapper.vm).toBeDefined()
  })
})
