import http from './http.js'
import { BASEURL, SOC_BASEURL } from '../config.js'

export {
	BASEURL
}

// 七牛图片域名
export const imgBaseUrl = 'https://image.v1.vodeshop.com/'

// 获取用户信息
export const getUsers = () => http.get(`${BASEURL}/api/v1/users`)

// 获取jssdk配置
export const getJsSdkConfig = (data) => http.get(`${BASEURL}/api/js-sdk-config`, data)

// 获取职位
export const getJobsJson = (type) => http.get(`/api/jobs/${type}`)
