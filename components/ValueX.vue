<template>
  <div class="x"></div>
</template>
<script>
export default {
  name: 'ValueX',
}
</script>
<style lang="scss" scoped>
.x {
  width: 60px;
  height: 60px;
  position: relative;
  margin: 0 auto;

  &::after {
    content: '';
    height: 60px;
    border-left: 2px solid #fff;
    position: absolute;
    transform: rotate(45deg);
    left: 28px;
    animation: pulse 1s ease-out;
  }

  &::before {
    content: '';
    height: 60px;
    border-left: 2px solid #fff;
    position: absolute;
    transform: rotate(-45deg);
    left: 28px;
    animation: pulse 0.5s;
  }
}
@keyframes pulse {
  0% {
    height: 0%;
  }
  100% {
    height: 100%;
  }
}
</style>
