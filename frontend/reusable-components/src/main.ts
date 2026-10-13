import { createApp } from "vue";
import App from "./App.vue";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/effects.css";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css"; // For Supabase project

createApp(App).use(router).use(BootstrapVue3).mount("#app");
