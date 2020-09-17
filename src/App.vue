<script>
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default {
	globalData: {
		
	},
	onLaunch(options) {
		// 初始化State
		this.initState()

		// 获取手机信息
		this.getSystemInfo()
	},
	async onShow(options) {
		// #ifdef MP-WEIXIN
		// 小程序码过来的
		if ([1011, 1012, 1013, 1043, 1047, 1048, 1049].indexOf(options.scene) != -1) {
			if ({ ...options.query }.hasOwnProperty('scene')) {
				uni.removeStorageSync('codeScene')
				options.query = options.query.scene
				uni.setStorageSync('codeScene', options.query.scene)
				console.log('App Show scene', options.query.scene)
			}
		} else if ([1036, 1037, 1038, 1044, 1073, 1074, 1091, 1096, 1007, 1008, 1035, 1058, 1043, 1067, 1074, 1082, 1091, 1102, 1154, 1155].indexOf(options.scene) != -1) {
		   uni.removeStorageSync('codeScene')
		   var extraData = {}
		   if (options.referrerInfo && options.referrerInfo.extraData) {
				extraData = Object.assign(options.query, options.referrerInfo.extraData)
		   } else {
				extraData = options.query
		   }
		   console.log('1037从小程序进入，1038从小程序放回', extraData)
		   uni.setStorageSync('codeScene', extraData) // 小程序带过来的参数
		   options.query = extraData
		}

		// 小程序更新
		if (uni.getUpdateManager) {
			const updateManager = uni.getUpdateManager()
			updateManager.onCheckForUpdate()
			updateManager.onUpdateReady(function(res) {
				uni.showModal({
					title: "更新提示",
					content: "新版本已经准备好，是否重启应用？",
					success(res) {
						if (res.confirm) {
							// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
							updateManager.applyUpdate()
						}
					}
				})
			})
			updateManager.onUpdateFailed(function(res) {
				// 新的版本下载失败
				uni.showModal({
					title: "已经有新版本了哟~",
					content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~",
					showCancel: false
				})
			})
		}
		// #endif
	},
	methods: {
		...mapMutations([
			'initState'
		]),
		//获取手机信息
		getSystemInfo() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					}
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (wx.getMenuButtonBoundingClientRect()) {
						let custom = wx.getMenuButtonBoundingClientRect();
						Vue.prototype.Custom = custom;
						Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					}
					// #endif
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		}
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import './common/colorui/main.css';
@import './common/colorui/icon.css';
@import './common/colorui/animation.css';
</style>
