$(document).ready(function() {
    var cookie = getCookie("userLogged");
    if (cookie == "true") {
        window.location.href="/quiz";
    }
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function onEnterCode(){
    var code = document.forms["enter-check"]["code"].value;
    
    if (code == "1337") {
        document.cookie = "userLogged=true; max-age=36000";
        window.location.href="/quiz";
    }
    else {
        var a=$('#wrong-code');
        a.css({'display':'inline-block','animation':'fadeInDown 0.25s cubic-bezier(.36,.07,.19,.97) both'});
    }
}