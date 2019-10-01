$(document).ready(function() {
    document.cookie = "curStage=4; path=/";
    window.location.href="/quiz/hiking";
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
    document.cookie = "curStage=4; path=/";
    window.location.href="/quiz/hiking";
}