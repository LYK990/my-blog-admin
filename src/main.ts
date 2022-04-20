import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'

// 加载全局样式
import './styles/index.scss'
const app = createApp(App)
app.use(router).mount('#app')
app.use(store)
app.use(store, key)
app.use(elementPlus)