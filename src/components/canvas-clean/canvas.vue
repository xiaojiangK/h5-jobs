<template>
	<view class="h100">
		<view id="wipe"></view>
		<image class="img1 animation-scale-up" src="https://res1.eqh5.com/o_1e5olloaja43eih1qvj1kj71tcv9.png?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!469x376a101a388%7CimageMogr2/auto-orient/thumbnail/308x246%3E/format/webp" mode="aspectFit"></image>
		<image class="img2 animation-scale-up" src="https://image.v1.vodeshop.com/FkXH3rwXq0kgRBm-DFszQlGCzjQq" mode=""></image>
		<image class="img3 animation-scale-up" src="https://res1.eqh5.com/FsWTw60iAKNsiFhNiMgWUH9cGU6K?imageMogr2/auto-orient/thumbnail/992x559%3E" mode=""></image>
		<image class="img4 animation-scale-up" src="https://image.v1.vodeshop.com/FlC1FkP2hEnCiHo2q48_ZYPMy5sx" mode=""></image>
		<image class="img5 animation-scale-up" src="https://image.v1.vodeshop.com/FmhcF1ZPPjXnND6Zr1l2aRCCtTFw" mode=""></image>
		
		<view class="company animation-slide-bottom">
			<view class="">
				<text class="company-name text-white text-bold">『 广东各有所爱信息科技有限公司 』</text>
			</view>
			<view class="margin-top-sm">
				<text class="group-name text-white text-bold">互联网技术开发部</text>
			</view>
		</view>
	</view>
</template>

<script>
	// import {dataArr} from './data.js'
export default {
	data() {
		return {};
	},
	components: {},
	mounted() {
		// this.initCanvas();
	},
	methods: {
		
	}
};
</script>

<style lang="scss" scoped="">
#wipe {
	// margin: 10px auto;
	width: 100vw;
	height: 100vh;
	background: url('https://res1.eqh5.com/FhOC2jciMujlrQNWJ7bMf-Vt13Hv?imageMogr2/auto-orient%7CimageMogr2/auto-orient/crop/!318x402a0a24%7CimageMogr2/auto-orient/thumbnail/489x618%3E/format/webp') no-repeat;
	background-size: 100% 100%;
	z-index: 2;
	position: absolute;
}
.img1{
	position: absolute;
	top: -30%;
	height: 100%;
	width: 100%;
	z-index: 3;
}
.img2{
	position: absolute;
	top: 1%;
	right: 1%;
	z-index: 3;
	width: 150rpx;
	height: 150rpx;
}
.img3{
	position: absolute;
	// top: 50%;
	bottom: 470rpx;
	z-index: 2;
	width: 100%;
	height: 300rpx;
}
.img4{
	position: absolute;
	// top: 50%;
	bottom: 170rpx;
	z-index: 2;
	width: 100%;
	height: 300rpx;
	left: 250rpx;
}
.img5{
	position: absolute;
	// top: 50%;
	bottom: 30rpx;
	z-index: 2;
	width: 100%;
	height: 300rpx;
	left: 35rpx;
}
.company{
	position: absolute;
	z-index: 3;
	top: 63%;
	width: 100%;
	height: 300rpx;
	font-size: 36rpx;
	.company-name{
		
	}
	
}
</style>
