<template>
	<view class="flex_row_c_c modalView" :class="show?'show':''" @tap="close">
		<view class="flex_column">
			<view class="bg-white border_radius_10px">
				<scroll-view class="scroll-view" scroll-y>
					<image :src="imgSrc || ''" mode="widthFix" class="posterImage"></image>
				</scroll-view>
			</view>
			<view class="btn" @tap.prevent.stop="saveImage">
				<image src="https://image.v1.vodeshop.com/FlXj05CMgxsoPFyLXA997Et5QqyY" class="icon"></image>
				<text class="txt">保存图片</text>
			</view>
			<view class="close-icon" @tap="close">
				<text class="cuIcon-close icon"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
        props: {
            show: {				// 是否显示
                type: Boolean,
                default: false
            },
            imgSrc: {			// 海报图片
                type: String,
                default: ''
            }
        },
		methods: {
			saveImage() {
				this.$emit('save')
			},
			// 关闭方法
			close() {
			    this.$emit('close')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.flex_row_c_c {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		&.modalView {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0;
			outline: 0;
			transform: scale(1.2);
			perspective: 2500upx;
			background: rgba(0, 0, 0, 0.6);
			transition: all .3s ease-in-out;
			pointer-events: none;
			backface-visibility: hidden;
			z-index: 999;
			&.show {
				opacity: 1;
				transform: scale(1);
				pointer-events: auto;
			}
		}
	}
	.flex_column {
		display: flex;
		position: relative;
		flex-direction: column;
		.border_radius_10px {
			overflow: hidden;
			border-radius: 12rpx;
			.scroll-view{
				max-height: 800rpx
			}
		}
		.posterImage {
			width: 65vw;
		}
	}
	.btn{
		position: absolute;
		left: 0;
		right: 0;
		bottom: -170rpx;
		margin: 0 auto;
		max-width: 100rpx;
		text-align: center;
		.icon{
			width: 100rpx;
			height: 100rpx;
			display: block;
		}
		.txt{
			display: inline-block;
			font-size: 24rpx;
			color: #FFFFFF;
			padding-top: 10rpx;
			text-align: center;
		}
	}
	.close-icon{
		width: 62rpx;
		height: 62rpx;
		background-color: rgba(0,0,0,0.6);
		// background-color: rgba(255,255,255,0.6);
		border-radius: 50%;
		text-align: center;
		line-height: 62rpx;
		position: absolute;
		top: -75rpx;
		right: -75rpx;
		.icon{
			font-size: 50rpx;
			color: #FFFFFF;
		}
	}
</style>
