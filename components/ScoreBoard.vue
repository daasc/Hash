<template>
  <div class="scoreboard">
    <div date-testid="player_0">
      <span> 0 </span>
      <span>{{ scoreboard.player_0 }}</span>
    </div>
    <div date-testid="player_x">
      <span>X</span>
      <span>{{ scoreboard.player_x }}</span>
    </div>
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
@media (min-width: 0px) {
  .scoreboard {
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 50px;
    background-color: #202124;
    padding: 10px;
    // #

    div {
      width: 40%;
      display: flex;
      justify-content: space-between;
      padding: 5px;
      border-top: 1px solid;
      border-right: 1px solid;
      border-bottom: 3.5px solid;
      border-left: 1px solid;
      border-color: #17bdac;
      border-radius: 6px;

      span:first-child {
        color: white;
      }
      span:last-child {
        color: #8d9398;
      }
    }
  }
}

@media (min-width: 1200px) {
  .scoreboard {
    display: flex;
    width: 30%;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 100px;
    background-color: #202124;
    padding: 10px;
  }
}
</style>
