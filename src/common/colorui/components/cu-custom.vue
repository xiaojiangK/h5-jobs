<template>
	<view>
		<view class="cu-custom" :style="[{height:selfCustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor,isHr?'myBottom':'']">
				<view class="action" @tap="BackPage" v-if="isBack">
					<text class="cuIcon-back"></text>
					<slot name="backText"></slot>
				</view>
				<view class="content" :style="[{top:selfStatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
    export default {
        data() {
            return {
                // StatusBar: this.StatusBar,
                // CustomBar: this.CustomBar 
				selfStatusBar: 0,
				selfCustomBar: 0
            };
        },
        name: 'cu-custom',
        computed: {
            style() {
                // var StatusBar = this.StatusBar;
                // var CustomBar = this.CustomBar;
                var bgImage = this.bgImage;
                var style = `height:${this.selfCustomBar}px;padding-top:${this.selfStatusBar}px;`;
                if (this.bgImage) {
                    style = `${style}background-image:url(${bgImage});`;
                }
                return style
            }
        },
        props: {
			isHr: {						// 是否需要底边
				type: Boolean,
				default: false
			},
            bgColor: {
                type: String,
                default: ''
            },
            isBack: {
                type: [Boolean, String],
                default: false
            },
            bgImage: {
                type: String,
                default: ''
            },
        },
		mounted () {		// 在mouted时获取值，保证拿到的不是undefine
			this.selfCustomBar = this.CustomBar
			this.selfStatusBar = this.StatusBar
		},
        methods: {
            BackPage() {
                if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
                    let url = '/' + __wxConfig.pages[0]
                    return uni.redirectTo({url})
                }
                this.$Router.back()
            }
        }
    }
</script>

<style>
.myBottom::after {
	content: '';
	position: absolute;
	bottom: -1px;
	left: 0;
	width: 750rpx;
	height: 1px;
	background: #e5e5e5;
}
</style>
