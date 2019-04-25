import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/sample01",
      name: "sample01",
      component: () =>
        import("./views/Helloworld.vue")
    },
    {
      path: "/sample02",
      name: "sample02",
      component: () =>
        import("./views/Address.vue")
    }
  ]
});
