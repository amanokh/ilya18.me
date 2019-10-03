var question = -1;
var curQuestion = 0;
var score = 0;
var ql = [];
var quizAlert = $("#quiz-alert");
var quizButton = $("#quiz-button");

function startTest(){
    $(".block").addClass('block-wide');
    $(".inner").addClass('inner-interact');
    $("#answer-list").css("display", "block");
    $("#start-button").css('display','none');
    $("#quiz-desc").css('display','none');
    $(".card-start").css('animation', 'flyLeft 0.5s cubic-bezier(0.13, 0.7, 0.24, 1.06) both');
    nextQuestion();
}

function nextQuestion(){
    question++;
    var qLength = questions[question]["fake_ans"].length+1
    quizButton.css("display", "none");
    quizAlert.css('display','none');
    quizAlert.removeClass("alert-success");
    quizAlert.removeClass("alert-warning");
    for (var i = 0; i < qLength; i++){
        var ansId = "#ans" + i;
        $(ansId).removeClass("ans-right");               $(ansId).removeClass("ans-wrong");
    }
    if (question < questions.length){
        ql = setQuestsList(questions[question]["fake_ans"].length+1);
        $("#quiz-title").html(questions[question]["title"]);
        $("#song-lyrics").html(questions[question]["desc"]);
        for (var i = 0; i < qLength; i++){
            var ansId = "#ans" + i;
            if (ql[i] == 0) {
                $(ansId).html(questions[question]["true_ans"]);
            } else {
                $(ansId).html(questions[question]["fake_ans"][ql[i] - 1]);
            }
        }
    }
}

function checkAnswer(i){
    if (curQuestion == question){
        if (ql[i] == 0){
            quizAlert.css('display','inline-block');
            $("#ans" + i).addClass("ans-right");
            quizAlert.addClass("alert-success");
            quizAlert.html(questions[question]["true_comment"]);
            score = score + questions[question]["score"];
            if (question == questions.length - 1) $("#end-button").css('display','block');
            else quizButton.css('display','block');
            curQuestion++;
        } else {
            $("#ans" + i).addClass("ans-wrong");
        }
        
    }
}
function endTest(){
    /*$(".block-quiz").css('display','none');
    $(".block-end").css('display','block');
    $("#end-title").html("Поздравляем! Твой результат: +" + score + " баллов!");*/
    var currentScore = parseInt(getCookie("score"));
    document.cookie="score=" + (currentScore + score).toString() + "; max-age=36000; path=/";
    document.cookie = "curStage=2; path=/";
    window.location.href="/codes/irk/";

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