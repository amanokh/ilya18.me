$(document).ready(function() {
    var body = $('html');
    setTimeout(function() {body.css({'display':'unset','animation':'fadeInDown 0.4s cubic-bezier(.36,.07,.19,.97) both'});}, 200);
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
