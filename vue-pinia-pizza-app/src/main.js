import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import naive from "naive-ui"
import StepProgress from 'vue-step-progress'
import pinia from './stores/pizza'

import 'vue-step-progress/dist/main.css'
import './assets/main.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(naive)

app.component('step-progress', StepProgress)
app.mount('#app')
