import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App) // выполнить в App
}).$mount("#app");
// смонтировать в #app