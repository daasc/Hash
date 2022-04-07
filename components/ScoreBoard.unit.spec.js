import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '@/store/hash.js'
import ScoreBoard from '@/components/ScoreBoard.vue'
jest.mock('axios')

const storeConfig = {
  state,
  namespaced: true,
}
describe('ScoreBoard', () => {
  const scoreboardMount = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(storeConfig)
    const wrapper = mount(ScoreBoard, {
      mocks: {
        $store: store,
      },
      localVue,
    })
    return { store, wrapper }
  }
  it('should mount the components ', () => {
    const { wrapper } = scoreboardMount()
    expect(wrapper.vm).toBeDefined()
  })
})
