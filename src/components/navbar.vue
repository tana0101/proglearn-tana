<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>所有課程</span>
          </template>
          <el-menu-item-group title="資訊科學">
            <el-menu-item index="1-1">演算法</el-menu-item>
            <el-menu-item index="1-2">資料結構</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="普羅科普">
            <el-menu-item index="1-3">3</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>4</template>
            <el-menu-item index="1-4-1">神秘的演算法</el-menu-item>
            <el-menu-item index="1-4-1">區塊鏈與加密貨幣的關係</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>課程管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-menu {
  z-index: 1000;
  position: fixed;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

</style>