<script setup lang="ts">

import headerVue from '@/components/header.vue';
import { onMounted, ref } from 'vue'
import { ElScrollbar } from 'element-plus'

// const max = ref(0)
// const value = ref(0)
// const innerRef = ref<HTMLDivElement>()
// const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
// /*scroll*/
// onMounted(() => {
//   max.value = innerRef.value!.clientHeight - scrollbarRef.value!.$el.clientHeight
// })
// const inputSlider = (value: number) => {
//   scrollbarRef.value!.setScrollTop(value)
// }
// const scroll = ({ scrollTop }) => {
//   value.value = scrollTop
// }
// const formatTooltip = (value: number) => {
//   return `${value} px`
// }

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <headerVue /> <br />
      </el-header>
      <el-main>

        <!-- <el-scrollbar ref="scrollbarRef" always @scroll="scroll"> -->
          <div ref="innerRef">
            <router-view></router-view>
          </div>
        <!-- </el-scrollbar> -->

        <!--<router-view></router-view>-->
      </el-main>
      <el-footer>
        <!-- <el-slider v-model="value" :max="max" :format-tooltip="formatTooltip" @input="inputSlider" /> -->
      </el-footer>
    </el-container>
  </div>

</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.el-slider {
  margin-top: 10px;
}

.el-header {
  height: 7vh;
}

.el-main {
  background-color: #f2f2f2;
  height: 87vh;
}

.el-footer {
  height: 6vh;
}

.container {
  min-height: 200vh;
}
</style>

