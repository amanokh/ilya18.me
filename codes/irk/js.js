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
    document.cookie = "curStage=2; path=/";
    $("#em1").css('display','none');
    $("#em2").css('display','unset');
    $("#phone").css('display','unset');
    $("#yaframe").css('display','unset');
    $(".btn").css('display','none');
    $("#title").toggleClass('alert-shake');
    $("#title").html("Упс! Кажется, чего-то не хватает");
    $("#desc").toggleClass('alert-shake');
    $("#desc").html("Не бойся, наша техподдержка уже решила проблему!<br>Тебе необходимо срочно обратиться по указанному адресу, чтобы продолжить игру");
}