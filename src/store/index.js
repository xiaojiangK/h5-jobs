import Vue from 'vue'
import Vuex from 'vuex'
import * as $apis from '@/common/request/index.js'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

// 引入所有vuex模块
const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[moduleName] = modulesFiles(modulePath)
  return modules
}, {})

Vue.use(Vuex)

const state = {
	userData: {
		access_token: '',
		expires_in: '',
		hasLogin: false, // 是否登录
		forcedLogin: false, // 是否強制登录
		initData: {},
		userInfo: {
			id: 0,
			mobile: '',
			name: '',
			avatar: 'https://image.v1.vodeshop.com/gysa-default-logo.png'
		},
	}
}

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules
})

export default store
