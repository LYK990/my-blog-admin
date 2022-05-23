<template>
  <div></div>
</template>

<script lang="ts" setup>
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
</script>

<style lang="less" scoped>

</style>
