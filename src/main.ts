import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueFire, VueFireAuth } from 'vuefire'
import ElementPlus from 'element-plus'

import App from './App.vue'
import router from './router'
import { firebaseApp } from './firebase'

import 'element-plus/dist/index.css'
import './assets/main.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth]
})

app.mount('#app')
