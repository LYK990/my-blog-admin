<template>
  <div>
    <el-row style="margin-bottom: 10px; padding: 20px; background-color: #fff">
      <el-col :span="16" style="display: flex">
        <el-button
          type="primary"
          size="large"
          @click="$router.push('./article')"
          >新建文章</el-button
        >
      </el-col>
      <el-col :span="8" style="display: flex">
        <el-input
          style="margin-right: 20px"
          size="large"
          v-model="title"
          placeholder="请输入标题"
        />
        <el-button type="primary" size="large">查询</el-button>
      </el-col>
    </el-row>
    <!-- 表格 -->
    <el-card>
      <el-table
        :header-cell-style="{ background: '#f5f7fa' }"
        max-height="650"
        :data="tableData"
        :row-style="{ height: '57px' }"
        :cell-style="{ padding: '0' }"
        class="table"
      >
        <el-table-column prop="title" label="标题" />
        <el-table-column prop="category" label="分类" />
        <el-table-column prop="tag" label="标签" />
        <el-table-column prop="readingQty" label="阅读量">
          <template #default>
            <el-tag>48</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="评论">
          <template #default>
            <el-switch
              v-model="value2"
              active-color="#13ce66"
              inactive-color="#ff4949"
            />
          </template>
        </el-table-column>
        <el-table-column prop="publishTime" label="发布时间" />
        <el-table-column prop="action" label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts" setup name="ArticleList">
import { ref } from "vue";
const title = ref("");
const value2 = ref(true);
const handleEdit = (index: number, row: any) => {
  console.log(index, row);
};
const handleDelete = (index: number, row: any) => {
  console.log(index, row);
};
const tableData = [
  {
    title: "你不知道的JavaScript",
    category: "Javascript",
    tag: "JavaScript",
    readingQty: "46",
    publishTime: "2022-03-01 17:24",
  },
];
</script>
<style lang="less" scoped>
.table {
  :deep(.el-table__body-wrapper) {
    .el-table__body {
      .cell {
        font-size: 14px;
      }
    }
  }
}
</style>
