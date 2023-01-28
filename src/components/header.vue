<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const route = useRoute()

const activeIndex = ref('/')
const handleSelect = (key: string, keyPath: string[]) => {
  router.push({ path: route.query.redirect as string || '/'+keyPath })
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index=""><img src="@/assets/img/logo.png" style="width: 50px;"/><h1>　普羅程式</h1></el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1"><h1>加入我們</h1></el-menu-item>
    <el-sub-menu index="">
      <template #title><h1>更多功能</h1></template>
      <el-menu-item index="login">登入會員</el-menu-item>
      <el-menu-item index="2-2">線上課程</el-menu-item>
      <el-menu-item index="2-3">關於我們</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
h1{
  font-weight:bold;
  font-size: 20px;
  line-height: 3;
  text-align: center;
}
.flex-grow {
  flex-grow: 1;
}
</style>