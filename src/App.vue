<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import locale from "element-plus/lib/locale/lang/zh-cn";
</script>

<style lang="less" scoped>
#app {
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
