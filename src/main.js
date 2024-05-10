import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

import "datatables.net-dt/css/dataTables.dataTables.min.css";
import "datatables.net-dt/js/dataTables.dataTables.min.mjs";

const app = createApp(App);
window.axios = window.Axios = axios;

app.use(createPinia());
app.use(router);

app.mount("#app");
