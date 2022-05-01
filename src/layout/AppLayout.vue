<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <AppMenuVue></AppMenuVue>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!--子路由出口-->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import AppMenuVue from './components/AppMenu.vue';
</script>

<style lang="scss" scoped>
.el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #304156;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
    width: auto;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  .el-container {
    height: 100vh;
  }
</style>