// template.js
module.exports = {
    componentTemplate: compoentName => {
        return `<template>
    <view class="${compoentName}">
	
    </view>
</template>

<script>
    export default {
        name: '${compoentName}',
		props: {
			
		}
    }
</script>

<style lang="scss" scoped>

</style>`
    },
    entryTemplate: compoentName=> `import ${compoentName} from './${compoentName}.vue'
export default ${compoentName}`,
    globalRegisterImportTemplate: compoentName => `import ${compoentName} from './${compoentName}/${compoentName}'`,
    globalRegisterExportTemplate: compoentName => `Vue.component(${compoentName}.name, ${compoentName})\n}`
}
