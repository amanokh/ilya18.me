$(document).ready(function() {
    if (parseInt(getCookie("curStage")) >= 5){
        document.cookie = "curStage=7; path=/";
        window.location.href="/quiz/catch";
        var body = $('html');
        setTimeout(function() {body.css({'display':'unset','animation':'fadeInDown 0.5s cubic-bezier(.36,.07,.19,.97) both'});}, 500);
    }
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function startGame(){
    if (parseInt(getCookie("curStage")) >= 5){
    document.cookie = "curStage=7; path=/";
    window.location.href="/quiz/catch";
    }
}