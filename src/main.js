import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMathjax from "vue-mathjax";
import vuetify from "./plugins/vuetify";

Vue.use(VueMathjax);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
