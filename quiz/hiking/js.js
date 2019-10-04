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
    $("#quiz-desc").css('display','none');
    $("#quiz-title").html("Берём или нет?");
    ql = setQuestsList(questions.length);
    nextQuestion();
}

function nextQuestion(){
    question++;
    quizButtons.css("display", "block");
    cards.css("display", "flex");
    cardStart.removeClass("card-anim-left");
    cardStart.removeClass("card-anim-right");
    $(".card-ans").removeClass("card-false");
    $(".card-ans").removeClass("card-true");
    $(".prog").html((question+1) + "/" + questions.length);
    quizPhoto.attr("src", "photos/"+ql[question]+".jpg")
    nextButton.css("display", "none");

    if (question < questions.length){
        var q = questions[ql[question]];
        
        quizEmoji.removeClass();
        quizEmoji.addClass(q["emoji_src"]);
        quizTitle.html(q["title"]);
        quizDesc.html(q["yes_ans"]);
    }
}

function checkAnswer(i){
    var q = questions[ql[question]];
    
    if (i) cardStart.addClass("card-anim-left");
    else cardStart.addClass("card-anim-right");
    
    quizButtons.css("display", "none");
    if (question == questions.length - 1) endButton.css("display", "block");
    else nextButton.css("display", "block");
    
    if (i == q["ans"]){
        $(".card-ans").addClass("card-true");
        if (i) quizDesc.html(q["yes_ans"]);
        else quizDesc.html(q["no_ans"]);
        score+=15;
    } else {
        $(".card-ans").addClass("card-false");
        if (i) quizDesc.html(q["yes_ans"]);
        else quizDesc.html(q["no_ans"]);
    }
    
}
function endTest(){
    /*$(".block-quiz").css('display','none');
    $(".block-end").css('display','block');
    $("#end-title").html("Поздравляем! Твой результат: +" + score + " баллов!");*/
    document.cookie="scoreHiking=" + score .toString() + "; max-age=36000; path=/";
    document.cookie = "curStage=5; path=/";
    window.location.href="/codes/msk/";

}

function setQuestsList(i) {
	ql = []
	while (ql.length != i){
		var a = Math.floor(Math.random() * i);
		if (ql.indexOf(a)==-1){
			ql.push(a)
		}
	}
    return ql;
}