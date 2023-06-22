import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/mdc-light-indigo/theme.css'
import './assets/main.css'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { user } from './stores/authStore'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

onAuthStateChanged(auth, (firebaseUser) => {
  user.value = firebaseUser
  console.log(firebaseUser)
})
const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
