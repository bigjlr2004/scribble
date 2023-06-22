import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
