import $mUtils from '@/common/utils.js'
import * as $apis from '@/common/request/index.js'

export default {
	// 获取用户信息
	getUsers({
		commit,
		state
	}) {
		return new Promise(async (resolve, reject) => {
			const {
				code,
				data
			} = await $apis.getUsers()
			if (code == 0) {
				commit('setStateData', {
					userInfo: data
				})
				resolve(true)
			}
		})
	},
	// 登录过期 重新登录
	reLogin({
		commit
	}, e) {
		// #ifndef MP-ALIPAY
		var curParam = e.options || e.$route.query
		// #endif

		// #ifdef MP-ALIPAY
		var curParam = e.$vm.$mp.query
		// #endif

		if (e.route == "pages/login/login") return
		
		commit("logout")

		// 登录成功后的重定向地址和参数
		let query = {
			redirectUrl: '/' + e.route,
			...curParam
		}

		uni.redirectTo({
			url: $mUtils.objParseUrlAndParam('/pages/login/login', query)
		})
	}
}
