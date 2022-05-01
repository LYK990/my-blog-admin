<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';

const router = useRouter() 

console.log(router.currentRoute.value.matched) // 获取当前路由的匹配记录
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
</script>

<style lang="scss" scoped>

</style>