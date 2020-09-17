
/**
 * extend([deep], target, ...source)
 * @param {type} deep
 * @param {type} target
 * @param {type} ...source
 * @returns {unresolved}
 * 其实可能还可以利用 Object.assign() 函数做个递归来实现类似的功能。
 * 今天才知道原来 vue 已经有 extend 包了，悲剧，搞了我几天了，刚从 mui 里面剥离了这段函数出来
 * 不过 npm 包的方式使用有点烦，特地安装这个包看了下源码，也是从 jQuery 里面剥离的
* 但是在 uni-app 里面感觉去安装 npm 包有点重，所以如果是小项目一个包都没用的，就不为了这个功能去安装包了
* 安装方法： npm install extend
 */
const extend = function() { //from jquery2
		//辅助函数
	var class2type = {};
		var cT=['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error'];
	   cT.forEach(function(v, i, a){
		class2type["[object " + v + "]"] = v.toLowerCase();
	});     
	var dataType = function(obj) {
		return obj == null ? String(obj) : class2type[{}.toString.call(obj)] || "object";
	};
		var isArray = Array.isArray ||
			function(object) {
				return object instanceof Array;
			   };
		var isObject = function(obj) {
			return dataType(obj) === "object";
		};
		var isPlainObject = function(obj) {
			return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) === Object.prototype;
		};
	var isWindow = function(obj) {
		return obj != null && obj === obj.window;
	};         
		var isEmptyObject = function(o) {
			for (var p in o) {
				if (p !== undefined) {
					return false;
				}
			}
			return true;
		};
		var isFunction = function(value) {
			return dataType(value) === "function";
		};     
	 
	   //函数主体开始
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	if (typeof target === "boolean") {
		deep = target;

		target = arguments[i] || {};
		i++;
	}

	if (typeof target !== "object" && !isFunction(target)) {
		target = {};
	}

	if (i === length) {
		target = this;
		i--;
	}

	for (; i < length; i++) {
		if ((options = arguments[i]) != null) {
			for (name in options) {
				src = target[name];
				copy = options[name];

				if (target === copy) {
					continue;
				}

				if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
					if (copyIsArray) {
						copyIsArray = false;
						clone = src && isArray(src) ? src : [];

					} else {
						clone = src && isPlainObject(src) ? src : {};
					}

					target[name] = extend(deep, clone, copy);

				} else if (copy !== undefined) {
					target[name] = copy;
				}
			}
		}
	}

	return target;
};

export default {
	extend
}
