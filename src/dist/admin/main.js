define('i',function (require, exports, module) {
	console.log(444444444444444444444444)


})

define(function (require, exports, module) {
	seajs.use(['i','a','b'],function(){
		console.log(3333333333 )
	});



})
