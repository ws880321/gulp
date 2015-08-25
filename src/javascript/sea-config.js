var baseDomain = ""
seajs.config({
	alias: {
		"jquery": "jquery/1.8.3/jquery"

	},
	// alias: {},
	preload: ["jquery"]
});
seajs.use('jquery',function(){
var page=$('body').attr('page');
	if (page=='index') {
		seajs.use('./src/javascript/index/main.js')
	};
})
