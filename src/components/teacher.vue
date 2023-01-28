<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <div class="smallRectangle">
        <span>老師</span><img src="@/assets/img/teacher_2.png" >
    </div>
    <div class="rectangle">

    </div>
</template>

<style scoped>
span {
  font-weight: bold;
  font-size: 90px;
  line-height: 2;
  text-align: center;
  margin-left: 110px;
  color: black;
}
img{
    width: 170px;
    margin-top: 10px;
    float:right;
    display:
}
.rectangle {
  margin-top: 15px;
  width: 100%;
  height: 70vh;
  background-color: #009dc0;
  border-radius: 10px;
}

.smallRectangle {
  width: 100%;
  height: 180px;
  background-color: #f2df39;
  border-radius: 10px;
}
</style>

