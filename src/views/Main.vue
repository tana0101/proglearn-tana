<script lang="ts" setup>
import { ref } from 'vue'
import teacherVue from '@/components/teacher.vue';
import studentVue from '@/components/student.vue';

const props = defineProps(['data'])
const data = props.data
const getImage = (value: number) => {
  return require('@/assets/img/board_' + value + '.jpg')
}

const show = ref(false)
const showElement = () => {
  show.value = !show.value;
}

const drawerStudent = ref(false)
const drawerTeacher = ref(false)

</script>

<template>
  <el-row justify="center">
    <div class="demo-radius">
      <div class="radius" :style="{
        borderRadius: `var(--el-border-radius-base)`,
      }">
        <el-carousel :interval="5000" arrow="always" height="750px">
          <el-carousel-item v-for="item in 7" :key="item">
            <!--<img :src="data.image" class="image" />-->
            <img :src="getImage(item)" class="image" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </el-row>
  <el-row justify="center">
    <div class="margin">
      <span style="font-size:80px;"> 你是否... 也受程式教學的困擾？ </span>
    </div>
  </el-row>
  <el-row justify="center">
    <div class="rectangle">
      <div class="common-layout">
        <el-container>
          <el-header height="250px">
            <div class="margin">
              <span style="font-size:80px; color: white;"> <span style="font-size:100px; color: white;">學習</span>好複雜 x
                <span style="font-size:100px; color:white">教學</span>好障礙 </span>
            </div>
            <!-- <div class="margin">
              <span style="color: white; z-index: 999;">你是</span>
            </div> -->
          </el-header>
          <el-main>
            <div class="smallRectangle">
              <div class="imageBlock">
                <div class="block">
                  <span class="demonstration">學生</span>
                  <div class="pic" @click="drawerStudent = true"><img class="cardImg" src="@/assets/img/student_2.png" /></div>
                </div>
                <div class="block">
                  <span class="demonstration">老師</span>
                  <div class="pic" @click="drawerTeacher = true"><img class="cardImg" src="@/assets/img/teacher_2.png" /></div>
                </div>
              </div>
            </div>
          </el-main>
        </el-container>
      </div>
    </div>
  </el-row>
  <el-row justify="center">
    <div class="margin">
      <span style="font-size:80px;"> 最新穎的教學功能 </span>
    </div>
  </el-row>
  <el-row justify="center">
    <div class="margin">
      <el-space wrap :size="50">
        <el-card shadow="hover" class="card">
          <span>整合式</span>
          <div class="pic"><img class="cardImg" src="@/assets/img/card_1.png" /></div>
        </el-card>
      </el-space>
      <el-space wrap :size="50">
        <el-card shadow="hover" class="card">
          <span>自動化</span>
          <div class="pic"><img class="cardImg" src="@/assets/img/card_1.png" /></div>
        </el-card>
      </el-space>
      <el-space wrap :size="0">
        <el-card shadow="hover" class="card">
          <span>互動性</span>
          <div class="pic"><img class="cardImg" src="@/assets/img/card_1.png" /></div>
          <div class="bottom">
            <el-button color="#626aef" @click="showElement">Click</el-button>
            <div style="display: flex; margin-top: 20px; height: 100px;">
              <transition name="el-fade-in">
                <div v-show="show"><img class="cardImg" src="@/assets/img/card_1.png" /></div>
              </transition>
            </div>
          </div>
        </el-card>
      </el-space>
    </div>
  </el-row>
  <el-row justify="center">
    <div class="margin">
      <span style="font-size:80px;"> 最適合學習的環境</span>
    </div>
  </el-row>
  <el-row justify="center">
    <div class="margin">
      <div class="demo-radius">
        <div class="radius3" :style="{
          borderRadius: `var(--el-border-radius-base)`,
        }">
          <div class="common-layout">
            <div class="pic" style="float:center; margin: 35px;"><img src="@/assets/img/learn.png"
                style="width: 1200px;"></div>
          </div>
        </div>
      </div>
    </div>
  </el-row>

  <el-row justify="center">
    <div class="margin">
      <div class="demo-radius">
        <div class="radius3" :style="{
          borderRadius: `var(--el-border-radius-base)`,
        }">
          <el-carousel :interval="5000" arrow="always" height="660px">
            <el-carousel-item v-for="item in 2" :key="item">
              <div class="common-layout" v-if="item == 1">
                <el-container>
                  <el-aside width="750px">
                    <div style="margin-top:60px;">
                      <span style="font-size:80px; color: #ea5943;">上課簡報</span><img style="width: 250px;float:right;"
                        src="@/assets/img/arrow_2.png" class="image" />
                    </div>
                    <div style="margin-top:150px;">
                      <span style="font-size:80px; color: #efb767;">即時練習</span>
                      <img style="width: 250px;float:right;" src="@/assets/img/arrow_3.png" class="image" />
                    </div>
                  </el-aside>
                  <el-main>
                    <div class="pic" style="margin-top:10px;"><img src="@/assets/img/learn_2.png"
                        style="width: 440px;"><img src="@/assets/img/learn_4.png" style="width: 440px;"></div>
                  </el-main>
                </el-container>
              </div>
              <div class="common-layout" v-if="item == 2">
                <el-container>
                  <el-main>
                    <div class="pic"><img src="@/assets/img/learn_1.png" style="width: 700px;"></div>
                    <div class="pic"><img src="@/assets/img/learn_3.png" style="width: 700px;"></div>
                  </el-main>
                  <el-aside width="600px">
                    <div style="margin-top:60px;">
                      <img style="width: 450px;" src="@/assets/img/arrow_1.png" class="image" />
                    </div>
                    <div>
                      <span style="font-size:80px; color: #f29587;">串流與直播</span>
                    </div>
                  </el-aside>
                </el-container>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </el-row>

  <el-row justify="center">
    <div class="margin">
      <span style="font-size:80px;"> 最友善的智能助教 </span>
    </div>
  </el-row>

  <el-drawer v-model="drawerStudent" title="title" :with-header="false" direction="ltr">
    <studentVue /> <br />
  </el-drawer>
  <el-drawer v-model="drawerTeacher" title="title" :with-header="false">
    <teacherVue /> <br />
  </el-drawer>
</template>

<style scoped>
.imageBlock .block {
  padding: 30px 0;
  text-align: center;
  border-right: 6px dashed white;
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  vertical-align: top;
}
.imageBlock .block:last-child {
  border-right: none;
}

.imageBlock .demonstration {
  display: block;
  color: black;
  font-size: 45px;
  margin-bottom: 10px;
}

.imageBlock img{
  width: 40%;
}

.rectangle {
  margin-top: 80px;
  margin-bottom: 130px;
  width: 100%;
  height: 500px;
  background-color: #009dc0;
  border-radius: 10px;
}

.smallRectangle {
  margin: 0px auto;
  width: 50%;
  height: 350px;
  background-color: #f2df39;
  border-radius: 5px;
}

span {
  font-weight: bold;
  font-size: 30px;
  line-height: 2;
  text-align: center;
  color: #000000;
}

.subtitle {
  margin-left: 100px;
  float: left;
  font-size: 20px;
  line-height: 0;
  color: #475669;
}

.margin {
  margin-top: 60px;
}

.bottom {
  margin-top: 20px;
  line-height: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 20;
  min-height: auto;
}

.card {
  height: 500px;
  width: 400px;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  transition: all .3s ease-in-out;
  bottom: 0;
}

.el-row {
  text-align: center;
}

.image {
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
}

.cardImg {
  width: 300px;
}

.pic {
  display: block;
}

.pic img {
  transform: scale(1, 1);
  transition: all 0.5s ease-out;
}

.pic img:hover {
  z-index: 999;
  transform: scale(1.1, 1.1);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #fff;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #fff;
}

.demo-radius .radius {
  height: 770px;
  width: 1500px;
  margin: 0 auto;
  border: 10px solid var(--el-border-color);
  border-radius: 0;
  background-color: #fff;
}

.demo-radius .radius2 {
  height: 650px;
  width: 1400px;
  margin: 0 auto;
  border: 10px solid var(--el-border-color);
  border-radius: 0;
  background-color: #fff;
}

.demo-radius .radius3 {
  height: 680px;
  width: 1400px;
  margin: 0 auto;
  border: 10px solid var(--el-border-color);
  border-radius: 0;
  background-color: #fff;
}

.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409EFF;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>