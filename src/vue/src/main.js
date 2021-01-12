import './public-path';
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
let instance = null;

let vueRender = () => new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  vueRender(props);
  // props.onGlobalStateChange((state,prev) => {
  //   console.log('current:' ,state,'prev:', prev);
  // })
  // 子主页只能修改初始化过的数据
  props.setGlobalState({
    name:123
  });
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}