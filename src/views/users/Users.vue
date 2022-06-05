<template>
  <div>
    <el-card>
      <el-table
        :header-cell-style="{ background: '#f5f7fa' }"
        :data="tableData"
        :row-style="{ height: '57px' }"
        :cell-style="{ padding: '0' }"
        class="table"
      >
        <el-table-column prop="id" label="id" />
        <el-table-column prop="UserName" label="用户名" />
        <el-table-column prop="" label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-drawer
      v-model="drawer"
      title="权限控制"
      :direction="direction"
      :before-close="handleClose"
    >
      <el-tree :props="props" :load="loadNode" lazy show-checkbox />
    </el-drawer>
  </div>
</template>

<script lang="ts" setup name="user">
import { ref } from "vue";
import type Node from "element-plus/es/components/tree/src/model/node";
interface Tree {
  name: string;
  leaf?: boolean;
}

const props = {
  label: "name",
  children: "zones",
  isLeaf: "leaf",
};

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: "region" }]);
  }
  if (node.level > 1) return resolve([]);

  setTimeout(() => {
    const data: Tree[] = [
      {
        name: "leaf",
        leaf: true,
      },
      {
        name: "zone",
      },
    ];

    resolve(data);
  }, 500);
};
const drawer = ref(false);
const direction = ref("rtl");
const handleClose = (done: () => void) => {
  drawer.value = false;
};

const tableData = [
  {
    id: "2016-05-03",
    UserName: "Tom",
  },
];
const handleEdit = (row: any) => {
  drawer.value = true;
  console.log(row);
};
const handleDelete = (row: any) => {
  console.log(row);
};
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
