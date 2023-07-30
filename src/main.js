import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
const user = localStorage.getItem("user");

createApp(App).use(router).mount('#app');

if (user == null)
    window.location = 'login.html';