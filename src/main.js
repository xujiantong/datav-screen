import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import datav from 'datav-libs-vue3'


createApp(App)
  .use(router)
  .use(store)
  .use(datav)
  .mount('#app')
