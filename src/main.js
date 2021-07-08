import { createApp } from 'vue'
import App from './App.vue'
import './css/tailwind.css'
import router from './router'

import {projectAuth} from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
  if(!app) {
    app = createApp(App).use(router).mount('#app')
  }
})

