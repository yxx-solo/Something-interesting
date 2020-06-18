//项目的JS打包入口文件
//导入Vue

import Vue from 'Vue'

//导入根组件
import App from './components/App.Vue'

const vm = new Vue({
    el:'#app',
    render:c=>c(App)
})