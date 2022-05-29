<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="colLeft grid-content bg-purple">
        <div class="categoryTitle"><div>管理分类</div></div>
        <div class="form">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="分类名:">
              <el-input v-model="formInline.user" placeholder="请输入" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitAction">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="colRight grid-content bg-purple-light">
        <el-tag closable>123123</el-tag>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup name="ArticleCategory">
import { reactive } from "vue";

const formInline = reactive({
  user: "",
  region: "",
});
const submitAction = () => {
  console.log("submit!");
};
</script>

<style lang="less" scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: #ffffff;
  padding-left: 30px;
}


.categoryTitle {
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  height: 80px;
}
.form {
  font-size: 16px;
  display: flex;
  :deep(.el-form-item__label) {
    font-size: 16px;
}
}

</style>
