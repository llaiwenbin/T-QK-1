import Vue from "vue";
import render from "./render.js";
import './index.scss'
import { registerMicroApps, setDefaultMountApp, start, initGlobalState } from 'qiankun';

Vue.config.productionTip = false;

// STEP1:初始化app
render({ loading: true });

// STEP2:注册子应用
const loader = loading => render({ loading });
registerMicroApps([{
  name: 'vue',
  entry: '//localhost:7001',
  loader,
  container: '#subapp-viewport',
  activeRule: '/vue'
}], {
  beforeLoad: console.log('beforeLoad'),
  beforeMount: console.log('beforeMount '),
  afterMount: console.log('afterMount '),
  beforeUnmount: console.log('beforeUnmount '),
  afterUnmount: console.log('afterUnmount '),
})
// STEP3:数据传递
const actions = initGlobalState({
  name: 'main'
})
actions.onGlobalStateChange((state,prev) => {
  console.log('current:' ,state,'prev:', prev);
})
actions.setGlobalState({
  newName:1
});

// STEP4:设置默认url
setDefaultMountApp('/vue');

// STEP5:启动项目
start();
