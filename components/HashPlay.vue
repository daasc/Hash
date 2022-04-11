<template>
  <div class="align-center">
    <div class="hash-play">
      <div class="line">
        <div class="play" data-testid="play-1" @click="doPlay(0, 'x')">
          <value-x v-if="hash.x[0] === 'x'"></value-x>
          <value-zero v-if="hash.x[0] === '0'"></value-zero>
        </div>
        <div class="play" @click="doPlay(1, 'x')">
          <value-x v-if="hash.x[1] === 'x'"></value-x>
          <value-zero v-if="hash.x[1] === '0'"></value-zero>
        </div>
        <div class="play" @click="doPlay(2, 'x')">
          <value-x v-if="hash.x[2] === 'x'"></value-x>
          <value-zero v-if="hash.x[2] === '0'"></value-zero>
        </div>
      </div>
      <div class="line">
        <div class="play" @click="doPlay(0, 'y')">
          <value-x v-if="hash.y[0] === 'x'"></value-x>
          <value-zero v-if="hash.y[0] === '0'"></value-zero>
        </div>
        <div class="play" @click="doPlay(1, 'y')">
          <value-x v-if="hash.y[1] === 'x'"></value-x>
          <value-zero v-if="hash.y[1] === '0'"></value-zero>
        </div>
        <div class="play" @click="doPlay(2, 'y')">
          <value-x v-if="hash.y[2] === 'x'"></value-x>
          <value-zero v-if="hash.y[2] === '0'"></value-zero>
        </div>
      </div>
      <div class="line">
        <div class="play" @click="doPlay(0, 'z')">
          <value-x v-if="hash.z[0] === 'x'"></value-x>
          <value-zero v-if="hash.z[0] === '0'"></value-zero>
        </div>
        <div class="play" @click="doPlay(1, 'z')">
          <value-x v-if="hash.z[1] === 'x'"></value-x>
          <value-zero v-if="hash.z[1] === '0'"></value-zero>
        </div>
        <div class="play" @click="doPlay(2, 'z')">
          <value-x v-if="hash.z[2] === 'x'"></value-x>
          <value-zero v-if="hash.z[2] === '0'"></value-zero>
        </div>
      </div>
    </div>
    <play-again v-if="result === false || result === true"></play-again>
  </div>
</template>
<script>
import PlayAgain from './PlayAgain.vue'
import ValueZero from '@/components/ValueZero.vue'
import ValueX from '@/components/ValueX.vue'
export default {
  name: 'HashPlay',
  components: { ValueZero, ValueX, PlayAgain },
  data() {
    return {
      cont: 0,
    }
  },
  computed: {
    hash() {
      if (this.cont) {
        console.log(this.$store.state.hash.hash.x[0])
      } else {
        console.log(this.$store.state.hash.result)
      }
      return this.$store.state.hash.hash
    },
    result() {
      return this.$store.state.hash.result
    },
  },
  methods: {
    doPlay(index, move) {
      if (
        this.cont % 2 === 0 &&
        !this.hash[move][index] &&
        !(this.result === false || this.result === true)
      ) {
        this.$store.commit('hash/PLAY', { move, index, value: 'x' })
        this.cont++
        this.$store.commit('hash/CHECK_PLAY')
      } else if (
        this.cont % 2 !== 0 &&
        !this.hash[move][index] &&
        !(this.result === false || this.result === true)
      ) {
        this.$store.commit('hash/PLAY', { move, index, value: '0' })
        this.cont++
        this.$store.commit('hash/CHECK_PLAY')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@media (min-width: 0px) {
  .align-center {
    .hash-play {
      display: flex;
      width: 100%;
      height: 40vh;
      flex-direction: column;
      .line {
        display: flex;
        height: 33%;
        .play {
          width: 33%;
          cursor: pointer;

          background: #17bdac;
          &:first-child,
          &:nth-child(2) {
            border-right: 6px solid;
            border-right-color: #0ca192;
          }
          border-bottom: 6px solid;
          border-bottom-color: #0ca192;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        &:last-child {
          .play {
            border-bottom: none;
          }
        }
      }
    }
  }
}
@media (min-width: 1200px) {
  .align-center {
    width: 100%;
    display: flex;
    justify-content: center;
    .hash-play {
      height: 60vh;
      width: 40%;
      .line {
        display: flex;
        height: 33%;
        &:last-child {
          border-bottom: none;
        }
        .play {
          width: 33%;
          cursor: pointer;
          background: #17bdac;
          &:first-child,
          &:nth-child(2) {
            border-right: 6px solid;
            border-right-color: #0ca192;
          }
        }
      }
    }
  }
}
</style>
