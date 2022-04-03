import { createApp } from 'vue'
import App from './App.vue'
const message = window['$message']
const app = createApp(App)
// 注册全局方法，如：app.config.globalProperties.$message = message
app.config.globalProperties.$message = message
// setupGlobalMethods(app)
app.mount('#app')
