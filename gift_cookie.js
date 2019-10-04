$(document).ready(function() {
    var cookie = getCookie("userLogged");
    if (cookie != "true") {
        window.location.href="/";
    } else {
        var pathName = window.location.pathname;
        var curStage = getCookie("curStage");
        if (curStage < 10)) {
            window.location.href=(atob(stages[curStage]));
        }
    }
    var body = $('html');
    setTimeout(function() {body.css({'display':'unset','animation':'fadeInDown 0.4s cubic-bezier(.36,.07,.19,.97) both'});}, 200);
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
