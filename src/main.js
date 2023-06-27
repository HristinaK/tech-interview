import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from "vuex";
// Create a new store instance or import from module.
const store = createStore({
  /* state, actions, mutations */
});
const app = createApp()
app.use(store)

app.use(router)

app.mount('#app')
