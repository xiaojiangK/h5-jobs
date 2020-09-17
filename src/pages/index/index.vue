<template>
	<view>
		<swiper class="drawer-page swiper" :class="{ 'show': modalName }" :current="current" @change="change" vertical>
			<swiper-item>
				<view class="swiper-item" :hidden="current != 0">
					<first-page></first-page>
					<image class="icon-up animation-move-bottom" src="/static/icon_up.png" @tap="next(1)" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :hidden="current != 1">
					<image class="item-3 animation-slide-bottom" src="/static/wording.png" />
					<image class="item-4 animation-move-circle" src="/static/circle.png" />
					<image class="item-5 animation-slide-left" src="/static/people.png" /> 
					<image class="item-6 animation-scale-up" src="/static/floating_develop.png" />
					<view class="cu-btn bg-green animation-slide-left" @tap="showModal('support')">查看职位</view>
					<image class="icon-up animation-move-bottom" src="/static/icon_up.png" @tap="next(2)" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :hidden="current != 2">
					<image class="item-11 animation-slide-bottom" src="/static/wording_production.png" />
					<image class="item-12 animation-move-circle" src="/static/circle-production.png" />
					<image class="item-13 animation-slide-right" src="/static/people_production.png" />
					<image class="item-14 animation-scale-up" src="/static/floating_production.png" />
					<image class="item-15 animation-scale-up" src="/static/pic_shadow_production.png" />
					<view class="cu-btn bg-blue animation-slide-left" @tap="showModal('product')">查看职位</view>
					<image class="icon-up animation-move-bottom" src="/static/icon_up.png" @tap="next(3)" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :hidden="current != 3">
					<image class="item-7 animation-slide-bottom" src="/static/wording_front.png" />
					<image class="item-8 animation-move-circle" src="/static/circle-design.png" />
					<image class="item-9 animation-slide-bottom" src="/static/people_design.png" />
					<image class="item-10 animation-scale-up" src="/static/floating_design.png" />
					<view class="cu-btn bg-cyan animation-slide-left" @tap="showModal('front')">查看职位</view>
					<image class="icon-up animation-move-bottom" src="/static/icon_up.png" @tap="next(4)" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :hidden="current != 4">
					<image class="item-7 animation-slide-bottom" src="/static/wording_end.png" />
					<image class="item-8 animation-move-circle" src="/static/circle-design.png" />
					<image class="item-9 animation-slide-bottom" src="/static/people_design.png" />
					<image class="item-10 animation-scale-up" src="/static/floating_design.png" />
					<view class="cu-btn bg-green animation-slide-left" @tap="showModal('end')">查看职位</view>
					<image class="icon-up animation-move-bottom" src="/static/icon_up.png" @tap="next(5)" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :hidden="current != 5">
					<image class="item-7 animation-slide-bottom" src="/static/wording_practice.png" />
					<image class="item-8 animation-move-circle" src="/static/circle-design.png" />
					<image class="item-9 animation-slide-bottom" src="/static/people_design.png" />
					<image class="item-10 animation-scale-up" src="/static/floating_design.png" />
					<view class="cu-btn bg-pink animation-slide-left" @tap="showModal('practice')">查看职位</view>
					<image class="icon-up animation-move-bottom" src="/static/icon_up.png" @tap="next(6)" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" :hidden="current != 6">
					<image class="item-16 animation-rotate-bottom-in" src="/static/pic_back.png" />
					<a href="https://www.zhipin.com/job_detail/?city=101280100&source=10&query=%E5%B9%BF%E4%B8%9C%E5%90%84%E6%9C%89%E6%89%80%E7%88%B1%E4%BF%A1%E6%81%AF%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8" target="_blank">
						<image class="item-17 animation-rotate-top-in" src="/static/btn_join.png" />
					</a>
				</view>
			</swiper-item>
		</swiper>
		
		<drawer :modal-name="modalName" @close="hideModal"></drawer>
		
	</view>
</template>

<script>
	import drawer from '@/components/drawer/drawer.vue'
	import firstPage from '@/components/canvas-clean/canvas.vue'
	
    export default {
        data() {
            return {
				current: 0,
				modalName: ''
			}
        },
		components: {
			drawer,
			firstPage
			
		},
        methods: {
			// 切换
			change(e) {
				this.current = e.detail.current
			},
			// 下一页
			next(next) {
				this.current = next
			},
			// 打开抽屉
			showModal(modalName) {
				this.modalName = modalName
			},
			// 关闭抽屉
			hideModal(e) {
				this.modalName = ''
			}
        }
    }
</script>

<style lang="scss" scoped>
	page{
		height: 100%;
		background: #083846;
	}
	.swiper{
		width: 100%;
		height: 100%;
		position: relative;
		swiper-item{
			text-align: center;
			[class*=item-] {
				left: 50%;
				z-index: 2;
				position: absolute;
				pointer-events: auto;
			}
			[class*=animation-] {
				animation-delay: .5s;
			}
			&:first-child, &:last-child{
				background: #083846;
			}
			&:nth-of-type(2){
				background: #9261BF;
			}
			&:nth-of-type(3){
				background: #FFBF50;
			}
			&:nth-of-type(4){
				background: #f37b1d;
			}
			&:nth-of-type(5){
				background: #F3533C;
			}
			&:nth-of-type(6){
				background: #1cbbb4;
			}
		}
		.icon-up{
			left: 50%;
			z-index: 9;
			width: 50rpx;
			bottom: 80rpx;
			height: 28rpx;
			position: absolute;
			margin-left: -25rpx;
			pointer-events: auto;
		}
		.item-1{
			top: 1%;
			width: 496rpx;
			height: 605rpx;
			margin-left: -248rpx;
		}
		.item-2{
			top: 62%;
			width: 369rpx;
			height: 259rpx;
			margin-left: -184rpx;
		}
		.item-3{
			top: 2%;
			width: 317rpx;
			height: 223rpx;
			margin-left: -158rpx;
		}
		.item-4{
			top: 28%;
			width: 481rpx;
			height: 487rpx;
			margin-left: -240rpx;
		}
		.item-5{
			top: 36%;
			width: 482rpx;
			height: 435rpx;
			margin-left: -240rpx;
		}
		.item-6{
			top: 8%;
			width: 460rpx;
			height: 660rpx;
			margin-left: -220rpx;
		}
		.item-7{
			top: 2%;
			width: 332rpx;
			height: 232rpx;
			margin-left: -172rpx;
		}
		.item-8{
			top: 30%;
			width: 501rpx;
			height: 481rpx;
			margin-left: -250rpx;
		}
		.item-9{
			top: 28%;
			width: 345rpx;
			height: 529rpx;
			margin-left: -100rpx;
		}
		.item-10{
			top: 43%;
			width: 496rpx;
			height: 281rpx;
			margin-left: -248rpx;
		}
		.item-11{
			top: 2%;
			width: 324rpx;
			height: 241rpx;
			margin-left: -168rpx;
		}
		.item-12{
			top: 28%;
			width: 506rpx;
			height: 506rpx;
			margin-left: -230rpx;
		}
		.item-13{
			top: 28%;
			width: 322rpx;
			height: 429rpx;
			margin-left: -160rpx;
		}
		.item-14{
			top: 33%;
			width: 543rpx;
			height: 374rpx;
			margin-left: -270rpx;
		}
		.item-15{
			top: 70%;
			width: 338rpx;
			height: 50rpx;
			margin-left: -168rpx;
		}
		.item-16{
			top: 20%;
			width: 563rpx;
			height: 486rpx;
			margin-left: -280rpx;
		}
		.item-17{
			top: 67%;
			width: 520rpx;
			height: 88rpx;
			margin-left: -260rpx;
		}
		.cu-btn{
			top: 80%;
			left: 50%;
			width: 520rpx;
			height: 88rpx;
			position: absolute;
			margin-left: -260rpx;
		}
	}
	.drawer-page {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
		&.show {
			transform: scale(0.9, 0.9);
			left: 85vw;
			box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
			transform-origin: 0;
		}
	}
</style>
