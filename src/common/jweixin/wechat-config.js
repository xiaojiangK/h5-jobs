const wx = require('./index.js')
import $mUtils from '@/common/utils.js'
import * as $apis from '@/common/request/index.js'

class WechatConfig {
	constructor() {
		this.isRegisterForIOS = false;
		wx.error(error => {
			console.log('微信配置错误', error);
		});
	}

	async config() {
		if (this.isRegisterForIOS) {
			return;
		}
		// 执行微信sdk注册
		let configData = {};
		let url = location.href.split('#')[0];
		const res = await $apis.getJsSdkConfig(encodeURIComponent(url))
		if (res.code == 0) {
			configData = res.data;
			console.log('微信SDK配置信息', configData);
			if ($mUtils.isAndroidWebview()) {
				// Android延迟注册, 防止注册成功还是无法调起微信接口的情况
				setTimeout(_ => {
					wx.config(configData);
				}, 500);
			} else {
				setTimeout(_ => {
					wx.config(configData);
				}, 500);
				this.isRegisterForIOS = true;
			}
		}
	}

	// 自定义微信分享到朋友的设置信息
	updateAppMessageShareData(shareData) {
		wx.ready(_ => {
			let {
				title,
				desc,
				link,
				imgUrl
			} = shareData;
			setTimeout(_ => { // 延迟调用api,避免比config早注册
				wx.updateAppMessageShareData && wx.updateAppMessageShareData({
					title, // 分享标题
					desc, // 分享描述
					link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl, // 分享图标
					success(res) {
						// 设置成功
						console.log(res);
					}
				});
			}, 200);
		});
	}
	
	// 自定义微信分享朋友圈的设置信息
	updateTimelineShareData(shareData) {
		wx.ready(_ => {
			let {
				title,
				link,
				imgUrl
			} = shareData;
			setTimeout(_ => { // 延迟调用api,避免比config早注册
				wx.updateTimelineShareData && wx.updateTimelineShareData({
					title, // 分享标题
					link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl, // 分享图标
					success(res) {
						// 设置成功
						console.log(res);
					}
				});
			}, 200);
		});
	}
}

export default new WechatConfig();
