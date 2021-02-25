$(document).ready(function() {
    var cookie = getCookie("userLogged");
    if (cookie == "true") {
        var curStage = getCookie("curStage");
        try {
            window.location.href=atob(stages[curStage]);  
        } catch (e) {}
    } 
    var body = $('html');
    login();
    # setTimeout(function() {body.css({'display':'unset','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});}, 500);
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
var isAlertShown = false;
function onEnterCode(){
    var code = document.forms["enter-check"]["code"].value;
    
    if (code == "2001-10-04") {
        login();
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
function login() {
    document.cookie = "userLogged=true; max-age=36000; path=/";
    document.cookie = "score=0; max-age=36000; path=/";
    document.cookie = "curStage=0; max-age=36000; path=/";
    window.location.href="/welcome";
}
