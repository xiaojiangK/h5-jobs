// template.js
module.exports = {
    viewTemplate: compoenntName => {
        return `<template>
	<view class="page">
		<cu-custom bgColor="bg-white" :isBack="true">
			<block slot="backText"></block>
			<block slot="content">${compoenntName}</block>
		</cu-custom>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options) {
			
		}
	}
</script>

<style lang="scss" scoped>

</style>`
    },
    entryTemplate: compoenntName => {
        return `import ${compoenntName} from './${compoenntName}.vue'
export {
	${compoenntName}
}`
    },
    viewRouterTemplate: (compoenntName, dirName) => `{
        requiresAuth: true,
        path: '${dirName}',
        name: '${compoenntName}',
        meta: {
        	title: '${compoenntName}'
        }
    }\n`
}
