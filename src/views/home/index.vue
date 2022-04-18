<template>
  <div>
    首页
    <p>{{$store.state.count}}</p>
    <Login></Login>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/views/login/index.vue'
export default defineComponent ({
  name: '',
  components: {
    Login
  }
})
</script>

<style lang="less" scoped>

</style>
