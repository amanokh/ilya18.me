var question = -1;
var curQuestion = 0;
var score = 0;
var ql = [];
var nextButton = $("#quiz-button");
var endButton = $("#end-button");
var quizButtons = $(".button-container");
var quizTitle = $(".card-emoji-title");
var quizEmoji = $("#card-emoji");
var quizPhoto = $("#photo");
var quizDesc = $("#desc");
var cardStart = $(".card-start");
var cards = $(".card");

function startTest(){
    $(".block").addClass('block-wide');
    $(".inner").addClass('inner-interact');
    $("#start-button").css('display','none');
    $("#quiz-title").html("Осталось убить 15 мышей");
    $("#quiz-desc").css('display','none');
    $(".game-table").css('display','table');

    play();
}
var order=["","","","","","",""];
var orderPic=["","","","","","",""];
var ai = 0;
var lastPic;
var lastPlace;
function play(){
    if (score < 15){
        randomize();
        setTimeout(function(){play();}, (Math.random() * (1100 - Math.min(score,8)*140) +260));
    } else {
        $(".game-table").css('display','none');
        $("#quiz-title").html("Миссия выполнена!").addClass("fadeDown");
        $("#quiz-desc").css('display','block').addClass("fadeDown");
        $("#quiz-desc").html("Палатка может спать спокойно! ").addClass("fadeDown");
        $("#end-button").css('display','block').addClass("fadeDown");
        
        
    }
}
function randomize(){
    lastPlace = choosePlace();
    lastPic = choose();
    
    var r = rand(4);
    var pl = order[r];
    $(pl).addClass("fadeIn");
    $(pl).removeClass();
    orderPic[r]="";
    
    //delete 3rd
    var pl = order[Math.abs((ai-3)%7)];
    $(pl).addClass("fadeIn");
    $(pl).removeClass();
    orderPic[Math.abs((ai-3)%7)]="";
    
    order[ai%7]="#"+lastPlace;
    orderPic[ai%7]="#"+lastPic;
    $("#"+lastPlace).addClass(lastPic);
    $("#"+lastPlace).addClass("fadeDown");
    ai++;
}
function choose() {
    var a = Math.floor(Math.random() * 16);
    return emojis[a];
}
function poul(i){
    if (orderPic[order.indexOf("#"+i)] == "#em em-mouse"){
        orderPic[order.indexOf("#"+i)] = "";
        $("#"+i).addClass("fadeIn");
        $("#"+i).removeClass();
        score++;
        $("#quiz-title").html("Осталось убить " + (15 - score)+ mouser(15-score));
    }
}
function choosePlace(){
    return Math.floor(Math.random() * 25)+1;
}
function rand(i){
    return Math.floor(Math.random() * i);
}
function mouser(i){
    if (i == 1) return " мышь";
    else if (i < 5) return " мыши";
    else return " мышей";
}
function endTest(){
    document.cookie="scoreMouse=" + score .toString() + "; max-age=36000; path=/";
    document.cookie = "curStage=8; path=/";
    window.location.href="/codes/spb/";
}