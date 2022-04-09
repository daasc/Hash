/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations } from '@/store/hash.js'
import HashPlay from '@/components/HashPlay.vue'
import ValueX from '@/components/ValueX.vue'
describe('HashPlay', () => {
  const hashPlayMount = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        hash: {
          state,
          mutations,
          namespaced: true,
        },
      },
    })
    const wrapper = mount(HashPlay, {
      mocks: {
        $store: store,
      },
      localVue,
      propsData: {
        data() {
          return {
            cont: 0,
          }
        },
      },
    })
    return { store, wrapper }
  }
  it('should mount the components ', () => {
    const { wrapper } = hashPlayMount()
    expect(wrapper.vm).toBeDefined()
  })
  it('should add the component value-x ', async () => {
    const { wrapper } = hashPlayMount()
    const valueX = wrapper.findComponent(ValueX)
    const play1 = wrapper.find('[data-testid="play-1"]')
    await play1.trigger('click')

    expect(valueX.exists()).toBe(true)
  })
})
