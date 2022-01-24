import { createApp } from 'vue'
import App from './App.vue'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/atom-one-dark.css'
import './app.css'

createApp(App).use(hljsVuePlugin).mount('#app')
