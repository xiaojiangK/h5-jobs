import { WHITE_LIST } from '../config.js'
import { req } from './request.js'

// 请求之前拦截
req.defaultReq.beforeSend = res => {
	return res
}

// 请求完成之前
req.defaultReq.beforeFinish = res => {
	return res.data
}

// 全局错误拦截
req.defaultReq.errorHandler = (err, next) => {
	next(err)
	uni.hideLoading()
}

function requestOption(options) {
	return {
		...options,
		header: {
			...req.defaultReq.header,
			'Authorization': 'Bearer ' + uni.getStorageSync('state_userData').access_token
		},
		abortFun: (info, bt) => {
			const urls = info.url.split('?')
			// 过滤白名单接口
			// if (WHITE_LIST.indexOf(urls[0]) === -1) {
			// 	// 未授权终止请求
			// 	if (!uni.getStorageSync('state_userData').hasLogin) {
			// 		bt.abort()
			// 	}
			// 	if (!uni.getStorageSync('state_userData').access_token) {
			// 		bt.abort()
			// 	}
			// }
		}
	}
}

export default {
	get(path, data = '', options = {}) {
		options.path = path
		options.data = data
		options.type = 'GET'
		return req.ajax(requestOption(options))
	},
	put(path, data, options = {}) {
		options.path = path
		options.data = data
		options.type = 'PUT'
		return req.ajax(requestOption(options))
	},
	post(path, data, options = {}) {
		options.path = path
		options.data = data
		options.type = 'POST'
		return req.ajax(requestOption(options))
	},
	deleted(path, data, options = {}) {
		options.path = path
		options.data = data
		options.type = 'DELETE'
		return req.ajax(requestOption(options))
	}
}
