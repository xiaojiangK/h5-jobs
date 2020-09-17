module.exports = {
	"root": true,
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly",
		'window': true,
		'document': true,
		'App': true,
		'Page': true,
		'Component': true,
		'Behavior': true,
		'wx': true,
		'getCurrentPages': true
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"id-match": 1, // 命名检测
		// 'indent': 'off', // 缩进风格
		// 'vue/script-indent': [
		// 	'error', 4, {
		// 		'baseIndent': 1
		// 	}
		// ],
		"no-prototype-builtins": 0,
		"no-eval": 1, // 禁止使用eval
		"max-depth": [0, 4], // 嵌套块深度
		"prefer-spread": 1, // 首选展开运算
		"no-console": 0, // 禁止使用console
		"no-undef": 0, // 禁止使用未定义变量
		"no-empty": 1, // 禁止块语句中空内容
		"quotes": [1, "single"], // 引号类型
		"no-extra-semi": 1, // 禁止多余的冒号
		"no-redeclare": 1, // 禁止重复声明变量
		"no-dupe-args": 2, // 禁止函数参数重复
		"no-multi-spaces": 1, // 禁止多余的空格
		"no-dupe-keys": 2, // 禁止创建对象键重复
		"vars-on-top": 0, // var必须放在作用域顶部
		"no-extra-parens": 1, // 禁止非必要的括号
		"no-func-assign": 2, // 禁止重复的函数声明
		"consistent-this": [2, "that"], // this别名
		"no-unreachable": 2, // 不能有无法执行的代码
		"no-unneeded-ternary": 1, // 禁止不必要的嵌套
		"linebreak-style": [0, "windows"], // 换行风格
		"no-invalid-regexp": 2, // 禁止无效的正则表达式
		"no-alert": 1, // 禁止使用alert/confirm/prompt
		"no-unused-expressions": 2, // 禁止无用的表达式
		"no-const-assign": 2, // 禁止修改const声明的变量
		"no-constant-condition": 1, // 禁止在条件中使用常量表达式
		"no-unused-vars": [1, {
			"vars": "all",
			"args": "after-used"
		}], // 禁止声明后未使用的变量或参数
		"func-call-spacing": [ // @fixable 函数名和执行它的括号之间禁止有空格
			'error',
			'never'
		],
		"no-debugger": process.env.NODE_ENV === 'production' ? 'error' : 'off', // allow debugger during development
		"array-bracket-spacing": [2, "never"], //是否允许非空数组里面有多余的空格
		"quote-props": [0, "always"], //对象字面量中的属性名是否强制双引号

	}
	
};
