<template>
  <div>
    <el-row style="margin-bottom: 10px">
      <el-col :span="16" style="display: flex">
        <el-input size="large" v-model="title" placeholder="请输入文章标题" />
        <div style="margin: 20px 0" />
        <el-button style="margin-left: 20px" type="primary" size="large"
          >保存</el-button
        >
      </el-col>
    </el-row>
    <v-md-editor v-model="text" height="600px"></v-md-editor>
  </div>
</template>

<script lang="ts" setup name="Article">
import { ref } from "vue";
const text = ref("");
const title = ref("");
</script>
<style lang="less" scoped></style>
