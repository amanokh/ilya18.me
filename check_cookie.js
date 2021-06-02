let stages=["L3dlbGNvbWUv", 
            "L3F1aXovbWVsb2R5Lw==", 
            "L2NvZGVzL2lyay8=", 
            "L3AvbW9zY293Lw==", 
            "L3F1aXovaGlraW5nLw==", 
            "L2NvZGVzL21zay8=", 
            "L3Avc2FpbnQtcC8=", 
            "L3F1aXovY2F0Y2gv", 
            "L2NvZGVzL3NwYi8=", 
            "L2NvZGVzL3RvZ2V0aGVyLw==",
            "L2hhcHB5LWJkYXkv"];
$(document).ready(function() {
    /* TODO: enable cookie check back
    var cookie = getCookie("userLogged");
    if (cookie != "true") {
        window.location.href="/";
    } else {
        var pathName = window.location.pathname;
        var curStage = getCookie("curStage");
        if (curStage < stages.indexOf(btoa(pathName))) {
            window.location.href=(atob(stages[curStage]));
        }
    }*/

    var body = $('html');
    setTimeout(function() {body.css({'display':'unset','animation':'fadeInDown 0.4s cubic-bezier(.36,.07,.19,.97) both'});}, 200);
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
