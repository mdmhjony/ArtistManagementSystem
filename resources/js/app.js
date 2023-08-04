import './bootstrap';

import {createApp} from "vue";

import App from "./layouts/app.vue";
import router from  './router/index.js';
createApp(App)
    .use(router)
    .mount("#app");
