seajs.config({
	alias: {
		"i":'common/c.js',
		'aaa':'common/aaa/aaa.js',
		'a':'index/a.js'

	},
	// alias: {},
	preload: ["jquery"]
 
});
seajs.use(['i','a','aaa'], function() {
	console.log(0000000000000000000000000000000000000);
});