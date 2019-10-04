$(document).ready(function() {
    document.cookie = "curStage=0; path=/";
    document.cookie = "userLogged=false; path=/";
    window.location.href="/";
    
});
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function startGame(){
    document.cookie = "curStage=0; path=/";
    document.cookie = "userLogged=false; path=/";
    window.location.href="/";
    
}