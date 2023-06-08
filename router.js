import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

function dynamic(promise) {
  return promise.then(m => m.default || m);
}

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: () =>
          dynamic(import(/* webpackChunkName: "home" */ "./views"))
      },
      {
        path: "/about",
        component: () =>
          dynamic(import(/* webpackChunkName: "home" */ "./views/about"))
      },
      {
        name: "mountains",
        path: "/mountains/:slug",
        component: () =>
          dynamic(
            import(/* webpackChunkName: "dashboardOrder" */ "./views/mountains")
          )
      }
    ]
  });
}
