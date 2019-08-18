import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
import VueSidebarMenu, { SidebarMenu } from "../src/sidebar";
import Vuetify from "vuetify";
import BootstrapVue from "bootstrap-vue";
import VueCookie from 'vue-cookie';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueSidebarMenu);
Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(VueCookie);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  // eslint-disable-line no-new
  el: "#app",
  router,
  components: { App },
  render: h => h(App)
});
