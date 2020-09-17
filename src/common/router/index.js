import {
	getRouterTableList,
	subPackageToPageConfigForSimpleRouter
} from '../../utils/uniPagesUtils_commonJs'
import Vue from 'vue'
import $mUtils from '../utils.js'
import Router from 'uni-simple-router'
// #ifdef H5
import WechatConfig from '@/common/jweixin/wechat-config.js'
// #endif

import pages from '../../page_modules'
import subPackages from '../../subpackage_modules'

Vue.use(Router)

//初始化
const router = new Router({
	h5: {
		paramsToQuery: true,
		loading: true,
		vueRouterDev: false,
		useUniConfig: true,
		resetStyle: () => {
			return {
				style: `
				#router-loadding .loadding {
					background-color: #f00 !important;
					box-shadow: 0 0 15px #f00 !important;
				}
				`
			}
		}
	},
	encodeURI: false,
	debugger: true,
	routes: [
		...getRouterTableList(pages),
		...subPackageToPageConfigForSimpleRouter(subPackages)
	] //路由表
})

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	const hasLogin = uni.getStorageSync('state_userData').hasLogin
	// 判断登录路径并且已经登录
	if (to.name == 'login' && to.path == '/pages/login/login' && hasLogin) {
		uni.redirectTo({
			url: $mUtils.objParseUrlAndParam('/pages/index/index', to.query)
		})
	}
	// 需要权限的页面
	if (to.requiresAuth) {
		if (hasLogin) {
			next()
		} else {
			// 登录成功后的重定向地址和参数
			// let query = {
			// 	redirectUrl: to.path,
			// 	...to.query
			// }
			// // 没有登录 是否强制登录?
			// if (uni.getStorageSync('state_userData').forcedLogin) {
			// 	uni.redirectTo({
			// 		url: $mUtils.objParseUrlAndParam('/pages/login/login', query)
			// 	})
			// } else {
			// 	uni.navigateTo({
			// 		url: $mUtils.objParseUrlAndParam('/pages/login/login', query)
			// 	})
			// }
			next()
		}
	} else {
		next()
	}
})

// 全局路由后置守卫
router.afterEach((to, from) => {
	// #ifdef H5
	if (to.requireWechatSdk) {
		WechatConfig.config(location.href)
	}
	// #endif
})

export default router
