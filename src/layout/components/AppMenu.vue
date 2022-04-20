<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>导航一</span>
    </el-menu-item>
    <el-menu-item index="2" disabled>
      <el-icon><document /></el-icon>
      <span>导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><setting /></el-icon>
      <span>导航三</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
