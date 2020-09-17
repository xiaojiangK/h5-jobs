let MBASEURL, MWEb_BASEURL, MSV_BASEURL, MSOC_BASEURL
	
if (process.env.NODE_ENV === 'development') {
	// 开发 npm run dev
	MBASEURL = 'https://test.api.vodeshop.com'
	MWEb_BASEURL = 'https://test.m.vodeshop.com'
	MSV_BASEURL = 'https://test.sv.vodeshop.com'
	MSOC_BASEURL = 'https://test.soc.vodeshop.com'
} else if (process.env.NODE_ENV === 'production') {
	// 生产 npm run build
	MBASEURL = 'https://api.vodeshop.com'
	MWEb_BASEURL = 'https://m.vodeshop.com'
	MSV_BASEURL = 'https://sv.vodeshop.com'
	MSOC_BASEURL = 'https://soc.vodeshop.com'
}

export const BASEURL = MBASEURL
export const SV_BASEURL = MSV_BASEURL
export const WEb_BASEURL = MWEb_BASEURL
export const SOC_BASEURL = MSOC_BASEURL
export const GD_FE_KEY = 'ba6d7bcba1c0f4f8b5dfb704d553ccf0' // 高德web端key
export const GD_S_KEY = 'e0f7173ff01dcc41276d070d23f6ca3a' 	// 高德web端服务key
export const GD_WX_KEY = 'ca06b283654e96768fcfb0f66ad982c2' // 高德微信小程序key

// 过滤不需要token的接口
export const WHITE_LIST = [
	`${BASEURL}/api/auth/login/weixin`
]
