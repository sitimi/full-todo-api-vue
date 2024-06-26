import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi' // 追加
  }
})
const pinia = createPinia()
const app = createApp(App)
app.use(vuetify)
app.use(pinia)
app.mount('#app')