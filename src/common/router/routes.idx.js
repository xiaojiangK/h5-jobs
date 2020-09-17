import $Router from './index.js'
import $mUtils from '@/common/utils.js'
// import { getMiniProgramRoutes } from '@/common/request/index.js'

export default {
	/*
	    idx:跳转的编号,
	    params:跳转的需要携带的参数,
	*/
	async navigateToIdx(idx, params) {
		if (idx == 0 || idx == undefined || idx == null) {
			return
		}
		
		// const { code, data } = await getMiniProgramRoutes('shop')
		// if(code == 0) {
		// 	// 商城小程序
		// 	var allNavIdx = data
		// }

		// 直播小程序
		var mpNavIdx = {
			'120000': '/pages/index/index' // 首页
		}

		if (allNavIdx[idx]) {
			$mUtils.navigateToMiniProgram({
				path: allNavIdx[idx],
				query: {
					...params
				}
			});
		} else if (mpNavIdx[idx]) {
			for (let i in params) {
				if (params[i] == null || params[i] == undefined) {
					delete params[i]
				}
			}
			$Router.push({
				path: mpNavIdx[idx],
				query: {
					...params
				}
			})
		} else {
			$Router.push({
				path: '/pages/index/index'
			})
		}
	}
}
