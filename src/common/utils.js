import store from '../store'
import $mRoutesIdx from '@/common/router/routes.idx.js'

let globalTimeout = null

const _U = {
	/**
	 * @desc 全局局部函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
	 * @param func 需要执行的函数
	 * @param wait 延迟执行时间（毫秒）
	 * @param immediate---true 表立即执行，false 表非立即执行
	 **/
	globalDebounce(func, wait, immediate=true) {
		return function() {
			let context = this;
			let args = arguments;
			if (globalTimeout) clearTimeout(globalTimeout);
			if (immediate) {
				var callNow = !globalTimeout;
				globalTimeout = setTimeout(() => {
					globalTimeout = null;
				}, wait)
				if (callNow) func.apply(context, args)
			} else {
				globalTimeout = setTimeout(function() {
					func.apply(context, args)
				}, wait);
			}
		}
	},
	/**
	 * @desc 局部函数防抖---“立即执行版本” 和 “非立即执行版本” 的组合版本
	 * @param func 需要执行的函数
	 * @param wait 延迟执行时间（毫秒）
	 * @param immediate---true 表立即执行，false 表非立即执行
	 **/
	debounce(func, wait, immediate=true) {
		let timer;
		return function() {
			let context = this;
			let args = arguments;
			if (timer) clearTimeout(timer);
			if (immediate) {
				var callNow = !timer;
				timer = setTimeout(() => {
					timer = null;
				}, wait)
				if (callNow) func.apply(context, args)
			} else {
				timer = setTimeout(function() {
					func.apply(context, args)
				}, wait);
			}
		}
	},
	/*
	 * 将data
	 * data.app_page.code  动态跳转的code
	 * data.params
	 */
	navigateToIdx(data) {
		if (data && data.app_page) {
			var code = Number(data.app_page.code);
			var params = data.params;
		}
		$mRoutesIdx.navigateToIdx(code, params)
	},

	/**  跳转小程序
	 * @method navigateToMiniProgram
	 * @param path {String}  页面路径
	 * @param query {Object}  页面onload(options)需要的参数 （地址栏传参)
	 * @param extraData {Object}  跳转目标小程序需要的参数
	 * @param env {String}  跳转目标小程序的版本（有效值： develop（开发版），trial（体验版），release（正式版)
	 * @param appId {String}  跳转目标小程序的APPID，需要先在配置文件注册APPID (默认跳直播小程序)
	 * @example this.$mUtils.navigateToMiniProgram({
			path: 'pages/dd/dd',
			query: {
				a: 1,
				b: 2
			},
			extraData: { 
				id: 1, 
				name: '规范化广泛', 
				code: '0',
			}
		});
	 */
	// path = 'pages/index/index',query = {},extraData = {},env = 'trial',appId = 'wxfc84ca3e0d59592d'
	navigateToMiniProgram(option = {}) {
		// #ifdef MP-WEIXIN
		const {
			id,
			open_merchant_id
		} = store.state.userData.userInfo
		const options = {
			path: 'pages/shop/index/index',
			query: {},
			extraData: {},
			env: 'trial',
			appId: 'wxd91abe47fc8b93f2',
			...option
		}
		const query = {
			invite_id: id,
			fromPlatform: 'live',
			merchant_id: open_merchant_id,
			room_id: 1, //直播间的ID
			showLive: false, // 是否显示小视屏弹窗
			...options.query
		}
		uni.navigateToMiniProgram({
			path: this.objParseUrlAndParam(options.path, query),
			appId: options.appId,
			extraData: options.extraData,
			envVersion: options.env,
			success(res) {
				option.success && option.success(res)
			},
			fail(err) {
				option.fail && option.fail(err)
			},
			complete() {
				option.complete && option.complete()
			}
		})

		// #endif
	},
	/**  跳转回上一个小程序，只有当另一个小程序跳转到当前小程序时才会能调用成功
	 * @method navigateBackMiniProgram
	 * @param {String|Object|Number|Boolean}  题目
	 * @return {String|Object|Number|Boolean} 参数名 参数说明
	 */
	navigateBackMiniProgram(data = '') {
		uni.navigateBackMiniProgram({
			extraData: {
				data
			},
			success(res) {
				// 返回成功
			}
		})
	},
	/*
	 * obj 转 params字符串参数
	 * 例子：{a:1, b:2} => a=1&b=2
	 */
	objParseParam(obj) {
		let paramsStr = '';
		if (obj instanceof Array) return paramsStr
		if (!(obj instanceof Object)) return paramsStr
		for (let key in obj) {
			paramsStr += `${key}=${obj[key]}&`;
		}
		return paramsStr.substring(0, paramsStr.length - 1)
	},
	/*
	 * obj 转 路由地址带参数
	 * 例子：{a:1, b:2} => /pages/index/index?a=1&b=2
	 */
	objParseUrlAndParam(path, obj) {
		let paramsStr = ''
		let url = path || '/'
		if (obj instanceof Array) return url
		if (!(obj instanceof Object)) return url
		paramsStr = this.objParseParam(obj)
		paramsStr && (url += '?')
		url += paramsStr
		return url
	},
	/*
	 *  params字符串参数中取某个参数的值
	 * 例子：var str = 'a=1&b=2'  =>  getQueryString('a',str)
	 */
	getQueryString(name, query) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
		var r = query.match(reg);
		if (r != null) {
			return unescape(r[2]);
		}
		return null;
	},
	// #ifdef H5
	/**
	 * @name 当前是否是Android下的微信浏览器
	 */
	isAndroidWebview() {
		let ua = navigator.userAgent;
		return ua.indexOf('Android') > -1;
	}
	// #endif
}

export default {
	..._U,
	navigateToIdx: _U.debounce(_U.navigateToIdx, 1000),
	navigateToMiniProgram: _U.debounce(_U.navigateToMiniProgram, 1000),
	navigateBackMiniProgram: _U.debounce(_U.navigateBackMiniProgram, 1000)
}
