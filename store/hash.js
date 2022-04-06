export const state = () => ({
  hash: {
    x: [],
    y: [],
    z: [],
  },
})

export const mutations = {
  PLAY(state, payload) {
    state.hash[payload.move][payload.index] = payload.value
  },
}

export const getters = {}

export const actions = {}
