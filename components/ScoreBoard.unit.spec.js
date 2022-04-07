/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import { state } from '@/store/hash.js'
import ScoreBoard from '@/components/ScoreBoard.vue'

describe('ScoreBoard', () => {
  const scoreboardMount = () => {
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
  it('should show game score', () => {
    const { wrapper } = scoreboardMount()
    const player0 = wrapper.find('[date-testid="player_0"]')
    const playerX = wrapper.find('[date-testid="player_x"]')

    expect(player0.text()).toContain('0')
    expect(playerX.text()).toContain('0')
  })
})
