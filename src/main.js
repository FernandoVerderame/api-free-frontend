import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faInstagram);

import AppLoader from './components/AppLoader.vue'
import { router } from './router'

const app = createApp(App)
app.component('AppLoader', AppLoader)
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.use(router)
app.mount('#app')
