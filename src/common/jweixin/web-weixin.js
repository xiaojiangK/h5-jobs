/*
    微信支付方法(uni-app h5)适用
    获取微信加签信息
    @param{data}:获取的微信加签
    @param{res}:成功回调
    @param{fail}:失败回调
     
    @warn:因为package为严格模式下的保留字，不能用作变量.
    @use
     
        wPay({
            appId,
            timeStamp,
            nonceStr,
            signature,
            package,
            paySign
        },res=>{
            console.log('调用成功!');
        },fail=>{
            console.log('调用失败!');
        })
*/

const wx = require('./index.js')
import * as $apis from '@/common/request/index.js'

/*
	data: object 参数 
	getConfig : Boolean  通过config接口注入权限验证配置
	jsApiListArr： Array  JS接口列表，
	successFn：成功callback
	errorFn：失败callback
*/
const wexinPay = async (data, getConfig, jsApiListArr, successFn, errorFn) => {
	if (getConfig) {
		var wxConfigData = new Object;
		const res = await $apis.getJsSdkConfig(encodeURIComponent(location.href))
		if (res.code == 0) {
			wxConfigData = res.data
		}
		wx.config({
		  ...wxConfigData
		})
	}

	wx.ready(function() {
		if (jsApiListArr.indexOf('chooseWXPay') != -1) {
			let [appId, timestamp, nonceStr, signature, packages, paySign] = [data.appId, data.timeStamp, data.nonceStr,
				data.signature,
				data.package, data.paySign
			];
			wx.chooseWXPay({
				timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
				nonceStr, // 支付签名随机串，不长于 32 位
				'package': packages, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
				signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
				paySign, // 支付签名
				success(res) {
					// 支付成功后的回调函数
					successFn(res)
					console.log('成功回调', res)
				},
				fail(res) {
					errorFn(res)
					console.log('支付取消', res)
				}
			});
		}
		
		// 自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
		if (jsApiListArr.indexOf('onMenuShareAppMessage') != -1) {
			let [title, desc, link, imgUrl] = [data.title, data.desc, data.link,data.imgUrl];
			wx.updateAppMessageShareData && wx.updateAppMessageShareData({
				title, // 分享标题
				desc, // 分享描述
				link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl, // 分享图标
				success(res) {
					// 设置成功
					successFn(res)
				}
			})
		}
		

		// 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
		if (jsApiListArr.indexOf('updateTimelineShareData') != -1) {
			let [title, link, imgUrl] = [data.title, data.link,data.imgUrl];
			wx.updateTimelineShareData({
				title, // 分享标题
				link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				imgUrl, // 分享图标
				success(res) {
					// 设置成功
					successFn(res)
				}
			})
		}
	});
	

	wx.error(function(res) {
		// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
		/*alert("config信息验证失败");*/
		console.log('config信息验证失败:', res)
	})
}

export default wexinPay
