export const state = () => ({
  hash: {
    x: [null, null, null],
    y: [null, null, null],
    z: [null, null, null],
  },
  result: null,
  scoreboard: {
    player_0: 0,
    player_x: 0,
    whoWon: '',
  },
})

export const mutations = {
  PLAY: (state, payload) => {
    state.hash[payload.move][payload.index] = payload.value
  },
  PLAY_AGAIN: (state) => {
    state.hash = {
      x: [null, null, null],
      y: [null, null, null],
      z: [null, null, null],
    }
    state.result = null
  },
  CHECK_PLAY: (state) => {
    for (const key in state.hash) {
      const play = state.hash[key].filter((play) => play)
      if (play.every((val) => val === 'x') && play.length === 3) {
        state.result = true
        state.scoreboard.player_x++
        state.scoreboard.whoWon = 'X'
      }
      if (play.every((val) => val === '0') && play.length === 3) {
        state.result = true
        state.scoreboard.player_0++
        state.scoreboard.whoWon = '0'
      }
    }
    for (let index = 0; index < 3; index++) {
      if (
        state.hash.x[index] === state.hash.y[index] &&
        state.hash.x[index] === state.hash.z[index] &&
        state.hash.x[index] &&
        state.hash.z[index] &&
        state.hash.y[index]
      ) {
        if (state.hash.x[index] === 'x') {
          state.scoreboard.player_x++
          state.scoreboard.whoWon = 'X'
        } else {
          state.scoreboard.player_0++
          state.scoreboard.whoWon = '0'
        }
        state.result = true
      }
    }
    if (
      state.hash.x[0] === state.hash.y[1] &&
      state.hash.x[0] === state.hash.z[2] &&
      state.hash.x[0] &&
      state.hash.z[2] &&
      state.hash.y[1]
    ) {
      if (state.hash.x[0] === 'x') {
        state.scoreboard.player_x++
        state.scoreboard.whoWon = 'X'
      } else {
        state.scoreboard.player_0++
        state.scoreboard.whoWon = '0'
      }
      state.result = true
    }
    if (
      state.hash.x[2] === state.hash.y[1] &&
      state.hash.x[2] === state.hash.z[0] &&
      state.hash.z[0] &&
      state.hash.x[2] &&
      state.hash.y[1]
    ) {
      if (state.hash.x[2] === 'x') {
        state.scoreboard.player_x++
        state.scoreboard.whoWon = 'X'
      } else {
        state.scoreboard.player_0++
        state.scoreboard.whoWon = '0'
      }

      state.result = true
    }
    let total = 0
    for (const key in state.hash) {
      total += state.hash[key].filter((play) => play).length
    }
    if (total === 9 && !state.result) {
      state.result = false
    }
  },
}

export const getters = {}

export const actions = {}
