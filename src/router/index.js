import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Artiste from "../views/Artiste/Artiste.vue";
import Artistes from "../views/Artistes/Artistes.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/artiste/:id",
    name: "artiste",
    component: Artiste
  },
  {
    path: "/artistes",
    name: "artistes",
    component: Artistes
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
