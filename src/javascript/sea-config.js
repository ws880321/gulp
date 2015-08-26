var baseDomain = ""
seajs.config({
	alias: {
		"jquery": "common/jquery/1.8.3/jquery",
		"i":'common/c.js'

	},
	// alias: {},
	preload: ["jquery"]
 
});
seajs.use('jquery',function(){
var page=$('body').attr('page');
	if (page=='index') {
		seajs.use('./src/dist/main.js')
	};
})
