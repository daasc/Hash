export const state = () => ({
  hash: {
    x: [],
    y: [],
    z: [],
  },
  result: null,
  scoreboard: {
    player_0: 0,
    player_x: 0,
  },
})

export const mutations = {
  PLAY: (state, payload) => {
    state.hash[payload.move][payload.index] = payload.value
  },
  CHECK_PLAY: (state) => {
    for (const key in state.hash) {
      if (
        state.hash[key].every((val) => val === 'x') &&
        state.hash[key].length === 3
      ) {
        state.result = true
        state.scoreboard.player_x++
      }
      if (
        state.hash[key].every((val) => val === '0') &&
        state.hash[key].length === 3
      ) {
        state.result = true
        state.scoreboard.player_0++
      }
    }
    for (let index = 0; index < 2; index++) {
      if (
        state.hash.x[index] === state.hash.y[index] &&
        state.hash.x[index] === state.hash.z[index] &&
        state.hash.x[index]
      ) {
        console.log('x: ')
        if (state.hash.x[index] === 'x') {
          state.scoreboard.player_x++
        } else {
          state.scoreboard.player_0++
        }
        state.result = true
      }
    }
    if (
      state.hash.x[0] === state.hash.y[1] &&
      state.hash.x[0] === state.hash.z[2] &&
      state.hash.x[0]
    ) {
      console.log('x verser: ')
      if (state.hash.x[0] === 'x') {
        state.scoreboard.player_x++
      } else {
        state.scoreboard.player_0++
      }
      state.result = true
    }
    if (
      state.hash.x[2] === state.hash.y[1] &&
      state.hash.x[2] === state.hash.z[0] &&
      state.hash.z[0]
    ) {
      if (state.hash.x[2] === 'x') {
        state.scoreboard.player_x++
      } else {
        state.scoreboard.player_0++
      }
      state.result = true
    }
    const total =
      state.hash.x.length + state.hash.y.length + state.hash.z.length
    if (total === 9 && !state.result) {
      state.result = false
    }
  },
}

export const getters = {}

export const actions = {}
