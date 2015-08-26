seajs.config({
    alias: {
    	"aa": "./f.js"}
});
define(function(require, exports) {
	seajs.use(['a', 'b', 'aa'], function() {
		console.log(0000000000000000000000000000000000000);
	});
});