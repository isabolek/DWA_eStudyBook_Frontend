import Vue from "vue";
import VueRouter from "vue-router";
import VueSidebarMenu, { SidebarMenu } from "@/components/SidebarMenu";
import Vuetify from "vuetify";
import Router from "vue-router";

import Novosti from "@/components/Novosti.vue";
import Kolegij from "@/components/Kolegij.vue";
import Raspored from "@/components/Raspored.vue";
import Profil from "@/components/Profil.vue";
import Repozitorij from "@/components/Repozitorij.vue";
import Login from "@/components/Login.vue";
import Kalendar from "@/components/Kalendar.vue";
import Studomat from "@/components/Studomat.vue";
import SCPU from "@/components/Scpu.vue";
import UNIPU from "@/components/Unipu.vue";

Vue.use(VueRouter);
Vue.use(VueSidebarMenu);
Vue.use(Vuetify);
Vue.use(Router);

window.axios = require("axios/index").create({
  baseURL: "http://127.0.0.1:5000/"
});

export default new Router({
  routes: [
    {
      SidebarMenu: false,
      path: "/",
      redirect: {
        name: "Login"
      }
    },
    {
      path: "/novosti",
      name: "Novosti",
      component: Novosti
    },
    {
      path: "/kolegij",
      name: "Kolegij",
      component: Kolegij
    },
    {
      path: "/raspored",
      name: "Raspored",
      component: Raspored
    },
    {
      path: "/profil",
      name: "Profil",
      component: Profil
    },
    {
      path: "/repozitorij",
      name: "Repozitorij",
      component: Repozitorij
    },
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/studomat",
      name: "Studomat",
      component: Studomat
    },
    {
      path: "/kalendar",
      name: "Kalendar",
      component: Kalendar
    },
    {
      path: "/scpu",
      name: "SCPU",
      component: SCPU
    },
    {
      path: "/unipu",
      name: "UNIPU",
      component: UNIPU
    }
  ],
  mode: "history"
});
