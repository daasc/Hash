<template>
  <div class="zero"></div>
</template>
<script>
export default {
  name: 'ValueZero',
}
</script>
<style lang="scss" scoped>
@media (min-width: 0px) {
  .zero {
    margin: 0 auto;
    border: 5px solid #ffff;
    height: 50px;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    width: 50px;
    animation: zero 1s;
  }

  @keyframes zero {
    0% {
      width: 10px;
    }
    100% {
      width: 50px;
    }
  }
}
@media (min-width: 1200px) {
  .zero {
    height: 100px;
    width: 100px;
  }
  @keyframes zero {
    0% {
      width: 10px;
    }
    100% {
      width: 100px;
    }
  }
}
</style>
