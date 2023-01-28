<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['title', 'link'])
console.log(props)
const title = props.title

const currentDate = ref(new Date())
</script>

<template>
  <el-card>
    <img :src="link" class="image" />
    <div style="padding: 14px">
      <span>{{ title }}</span>
      <div class="bottom">
        <el-button text class="button">Operating</el-button>
      </div>
    </div>
  </el-card>
</template>

<style scoped>

body-style {
  padding: 0px;
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>