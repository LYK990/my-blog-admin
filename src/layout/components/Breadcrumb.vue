<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="route in routes"
        :key="route.path"
        :to="{ path: route.path }"
        >{{ route.meta.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { ArrowRight } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
const routes = computed(() => {
  return router.currentRoute.value.matched.filter((item) => item.meta.title);
});
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin: 10px;
}
</style>
