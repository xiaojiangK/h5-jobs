export default {
	// 用户是否登录
	hasLogin: state => {
		if (state.userData.access_token && state.userData.hasLogin) {
			return true
		} else {
			return false
		}
	}
}
