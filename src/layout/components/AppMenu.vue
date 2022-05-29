<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
    :collapse="false"
    collapse-transition
    router
  >
    <el-sub-menu index="/article">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>文章管理</span>
      </template>
      <el-menu-item index="/article/articleCategory">
        <span>文章分类</span>
      </el-menu-item>
      <el-menu-item index="/article/articleList">
        <span>文章列表</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
