import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGridLayout from "vue-grid-layout";
import "./assets/main.css"
const app = createApp(App)
app.use(VueGridLayout);
app.use(router).mount('#app')
