<template>
  <div class="align-center">
    <div class="hash-play">
      <div class="line">
        <div class="play"></div>
        <div class="play"></div>
        <div class="play"></div>
      </div>
      <div class="line">
        <div class="play"></div>
        <div class="play"></div>
        <div class="play"></div>
      </div>
      <div class="line">
        <div class="play"></div>
        <div class="play"></div>
        <div class="play"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HashPlay',
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
          background: cadetblue;
          &:first-child,
          &:nth-child(2) {
            border-right: 6px solid;
            border-right-color: #0ca192;
          }
          border-bottom: 6px solid;
          border-bottom-color: #0ca192;
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
