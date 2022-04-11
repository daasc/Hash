<template>
  <div class="scoreboard">
    <div date-testid="player_0">Player 0: {{ scoreboard.player_0 }}</div>
    <div date-testid="player_x">Player X: {{ scoreboard.player_x }}</div>
  </div>
</template>
<script>
export default {
  name: 'ScoreBoard',
  computed: {
    scoreboard() {
      return this.$store.state.hash.scoreboard
    },
  },
}
</script>
<style lang="scss" scoped>
.scoreboard {
  display: flex;
  width: 40%;
  justify-content: space-between;
  margin: 0 auto;
}
</style>
