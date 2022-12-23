import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'axios'
import './assets/main.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import $ from 'jquery/dist/jquery.min'
import 'animate.css'
import 'highlight.js/styles/a11y-dark.css'
import hljsVuePlugin from "@highlightjs/vue-plugin"
import 'tocbot/dist/tocbot.css'
import 'plyr/dist/plyr.css'


const app = createApp(App)
app.use($)
app.use(hljsVuePlugin)
app.use(router)

app.mount('#app')
