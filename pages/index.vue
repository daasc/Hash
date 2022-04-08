<template>
  <div class="container">
    <score-board></score-board>
    <hash-play></hash-play>
  </div>
</template>

<script>
import HashPlay from '~/components/HashPlay.vue'
import ScoreBoard from '~/components/ScoreBoard.vue'
export default {
  name: 'IndexPage',
  components: { HashPlay, ScoreBoard },
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: #17bdac;
}
</style>
