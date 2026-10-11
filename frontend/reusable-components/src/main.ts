import { createApp } from "vue";
import App from "./App.vue";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/effects.css";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";

import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(Quasar, { plugins: {} })
  .mount("#app");
