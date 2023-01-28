<script lang="ts" setup>
import { reactive, ref } from 'vue'
const user = reactive({
  email: '',
  password: '',
})
const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <div class="box">
    <el-row :gutter="40" type="flex" justify="center">
      <el-col :span="10">
        <el-card :body-style="{ padding: '10px' }">
          <img src="@/assets/img/login.jfif" class="image" />
          <div style="padding: 14px">
            <div class="bottom">

            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="13" type="flex" justify="center" class="mbox">
        <span>登入會員</span><br>
        <el-form-item label="E-mail">
          <el-input v-model="user.email" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="user.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="button">
            <span style="font-size:20px;">Login</span>
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>
  
<style>
body-style {
  padding: 0px;
}

.el-form-item{
  margin-bottom: 25px;
}

.el-form-item__label {
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  color: white;
}

span {
  font-weight: bold;
  font-size: 35px;
  line-height: 3;
  text-align: center;
  color: rgb(255, 255, 255);
}

.click {
  font-weight: bold;
  font-size: 20px;
  line-height: 3;
}

.form-item {
  font-weight: bold;
  font-size: 25px;
  line-height: 3;
  color: #72787a;
}

.box {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  width: 700px;
  height: 400px;
  display: flex;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: rgb(44, 196, 231);
  transform: translate(-50%, 50%);
  padding: 20px;
  box-shadow: 5px 5px 0 0 #858d90;
}

.mbox {
  padding: 50px;
}

.login {
  width: 80px;
  height: 50px;
  display: flex;
  border-radius: 10px;
  text-align: center;
  background-color: #009dc0;
}

.bottom {
  color: #72787a;
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.div-right {
  text-align: right;
  margin: 0px auto 0px auto;
}

.button {
  padding: 0;
  min-height: auto;
  width: 80px;
}

.image {
  width: 100%;
  display: block;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>