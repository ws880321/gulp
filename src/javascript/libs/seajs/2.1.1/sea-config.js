var baseDomain = "http://js.yunxiaoyuan.net/"
seajs.config({
    base: baseDomain,
    alias: {"jquery": "sea-modules/jquery/1.8.3/jquery"},
    preload: ["jquery"]
});
var student_base = baseDomain + "/vko-modules/vko-web/student/";
var teacher_base = baseDomain + "/vko-modules/vko-web/teacher/";
var parent_base = baseDomain + "/vko-modules/vko-web/parent/";
