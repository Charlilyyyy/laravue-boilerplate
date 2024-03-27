// import '../sass/app.scss';
import '../css/app.css';
import { createApp } from 'vue';
import router from './router';
import App from './home/App.vue';

const app = createApp(App)
app.use(router).mount('#app')

// const app = document.querySelector('#app');
// if (app) {
//   createApp(App).use(router).mount(app);
// }