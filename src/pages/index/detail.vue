<template>
	<view>
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">职位详情</block>
		</cu-custom>
		<view class="container">
			<view class="title">{{ detail.title }}</view>
			<view class="content" v-html="detail.desc"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail: {}
			};
		},
		onLoad(options) {
			this.getJobsJson(options)
		},
		methods: {
			async getJobsJson(options) {
				const { code, data } = await this.$apis.getJobsJson(options.name)
				if (code == 0) {
					this.detail = data[options.index].description
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page{
		background: #f9f9f9;
	}
	.container{
		padding: 0 24rpx;
		.title{
			color: #414a60;
			margin: 20rpx 0;
			font-size: 32rpx;
			font-weight: bold;
		}
		.content{
			color: #7e8793;
			font-size: 28rpx;
			line-height: 52rpx;
		}
	}
</style>
