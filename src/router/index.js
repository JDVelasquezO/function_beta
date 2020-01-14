import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Courses from "../views/Courses.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/category/:theme",
    name: "courses",
    component: Courses
  }
];

const router = new VueRouter({
  routes
});

export default router;
