import Vue from 'vue'
import App from './App'
import store from './store'

import '@/common/mock'
import '@/common/router'
import $mUtils from '@/common/utils.js'
import { RouterMount } from 'uni-simple-router'
import * as $apis from '@/common/request/index.js'

// 保存图片到系统相册
// import '@/common/ican-H5Api/ican-H5Api' // 对齐H5的部分API，保持API通用跨平台

// 注册全局头部组件
import cuCustom from '@/common/colorui/components/cu-custom.vue'
// 注册全局刷新组件
import MescrollUni from '@/components/mescroll-uni/mescroll-uni.vue'
import MescrollBody from '@/components/mescroll-uni/mescroll-body.vue'
import MescrollMixin from '@/components/mescroll-uni/mescroll-mixins.js'

Vue.component('cu-custom', cuCustom)
Vue.component('mescroll-uni', MescrollUni)
Vue.component('mescroll-body', MescrollBody)

App.mpType = 'app'
Vue.prototype.$apis = $apis
Vue.prototype.$store = store
Vue.prototype.$mUtils = $mUtils
Vue.config.productionTip = false

Vue.mixin(MescrollMixin)

const app = new Vue({
    store,
    ...App
})

// #ifdef H5
RouterMount(app,'#app')
// #endif

// #ifndef H5
app.$mount() // 为了兼容小程序及app端必须这样写才有效果
// #endif
