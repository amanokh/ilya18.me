$(document).ready(function() {
    var body = $('html');
    setTimeout(function() {body.css({'display':'unset','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});}, 500);
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function startGame(){
    document.cookie = "curStage=9; path=/";
    window.location.href="/codes/together/";
    
}
var isAlertShown = false;
function onCode(){
    var code1 = document.forms["code-end"]["code1"].value;
    var code2 = document.forms["code-end"]["code2"].value;
    var code3 = document.forms["code-end"]["code3"].value;
    
    if (code1 == "0Lymp1c" && code2 == "gR3at" && code3 == "b00y") {
        document.cookie = "curStage=10; max-age=36000; path=/";
        window.location.href="/happy-bday/";
    }
    else {
        var a=$('#wrong-code');
        a.css('display', 'inline-block');
        a.toggleClass('alert-fade', !isAlertShown);
        setTimeout(function() {
            a.removeClass('alert-fade');
        }, 500);
        a.toggleClass('alert-shake', isAlertShown);
        isAlertShown = true;
        setTimeout(function() {
            a.removeClass('alert-shake');
        }, 500);
    }
    
}