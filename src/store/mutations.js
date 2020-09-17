import service from './service.js'

const saveStateData = function(key, data) {
	uni.setStorageSync('state_' + key, data)
}

export default {
	// 初始化state的数据
	initState(state) {
		for (let keyname in state) {
			let stateData = uni.getStorageSync('state_' + keyname)
			state[keyname] = service.extend(true, state[keyname], stateData)
			saveStateData(keyname, state[keyname])
		}
	},
	setStateData(state, newUserData) { //更新状态数据并保存到存储。
		if (Array.isArray(newUserData)) {
			var keyname = newUserData[0]
			var dat = newUserData[1]
		} else {
			var stateKeys = Object.keys(state)
			var keyname = stateKeys[0]
			var dat = newUserData
		}
		state[keyname] = service.extend(true, state[keyname], dat)
		//所有修改的最后一句都应该更新持久化数据
		saveStateData(keyname, state[keyname])
	},
	// 登录更新状态
	login(state, userData) {
		state.userData.hasLogin = true
		state.userData.expires_in = userData.expires_in || ''
		state.userData.access_token = userData.access_token || ''
		saveStateData('userData', state.userData)
	},
	// 退出更新状态
	logout(state) {
		state.userData.hasLogin = false
		state.userData.expires_in = ''
		state.userData.access_token = ''
		state.userData.userInfo = {
			id: 0,
			mobile: '',
			name: '游客',
			avatar: 'https://image.v1.vodeshop.com/gysa-default-logo.png'
		}
		saveStateData('userData', state.userData)
	}
}
