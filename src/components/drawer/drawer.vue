<template>
	<view>
		<view class="drawer-close" :class="{ 'show': modalName }" @tap="hideModal">
			<text class="cuIcon-pullright"></text>
		</view>
		<scroll-view scroll-y class="drawer-window" :class="{ 'show': modalName }">
			<view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
				<view class="cu-item arrow" v-for="(item, index) in jobList" :key="index" @tap="jumpDetail(index)">
					<view class="content">
						<text class="cuIcon-github text-grey"></text>
						<text class="text-grey">{{ item.title }}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jobList: []
			};
		},
		props: {
			modalName: {
				type: String
			}
		},
		watch: {
			async modalName(newValue) {
				if (newValue) {
					const { code, data } = await this.$apis.getJobsJson(newValue)
					if (code == 0) {
						this.jobList = data
					}
				}
			}
		},
		methods: {
			// 关闭抽屉
			hideModal() {
				this.$emit('close')
			},
			jumpDetail(index) {
				this.$Router.push({
					path: '/pages/index/detail',
					query: {
						index,
						name: this.modalName
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.drawer-close{
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		&.show{
			opacity: 1;
			pointer-events: all;
			width: 15vw;
			color: #fff;
		}
	}
	.drawer-window {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
		&.show {
			transform: scale(1, 1) translateX(0%);
			opacity: 1;
			pointer-events: all;
		}
	}
</style>
