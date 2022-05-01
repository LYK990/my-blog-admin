<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    :collpase = "isCollapse"
    router
  >
    <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <span>导航一</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><document /></el-icon>
      <span>导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><setting /></el-icon>
      <span>导航三</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";

const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
