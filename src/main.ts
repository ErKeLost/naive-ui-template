import { createApp } from 'vue'
import App from './App.vue'

import router from '~/router/index'
import { setupStore } from '~/store'
import './styles/main.css'
import './styles/nprogress.scss'
// import '@unocss/reset/tailwind.css'
import 'uno.css'
const app = createApp(App)
// 注册全局方法，如：app.config.globalProperties.$message = message
// app.config.globalProperties.$message = message
// setupGlobalMethods(app)
app.use(router)
setupStore(app)
app.mount('#app')
