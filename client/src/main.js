import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App) // สร้าง App
app.use(router) // ใช้งาน Router
app.mount('#app') // แปะลงไปที่ id="app" ใน index.html    
