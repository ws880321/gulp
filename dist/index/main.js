define('b',function (require, exports, module) {
console.log(2222222222222222222222222222222)



})
define('a',function (require, exports, module) {
	console.log(111111111111111111111111111111111111)



})
eajs.config({

  // 别名配置
  alias: {
  	"jquery": "jquery/1.8.3/jquery",
     'i' : '../../common/c'

  },
  preload: ["jquery"]
});
define(function (require, exports, module) {
	seajs.use(['a','b','i'],function(){
    console.log(0000000000000000000000000000000000000)
 });
