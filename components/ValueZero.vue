<template>
  <div class="zero"></div>
</template>
<script>
export default {
  name: 'ValueZero',
}
</script>
<style lang="scss" scoped>
.zero {
  margin: 0 auto;
  border: 5px solid #ffff;
  height: 100px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  width: 100px;
  animation: zero 1s;
}

@keyframes zero {
  0% {
    width: 10px;
  }
  100% {
    width: 100px;
  }
}
</style>
