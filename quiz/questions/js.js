var question = -1;
var curQuestion = 0;
var score = 0;
var ql = [];
var quizAlert = $("#quiz-alert");
var quizButton = $("#quiz-button");

function startTest(){
    $(".block").addClass('block-wide');
    $("#answer-list").css("display", "block");
    $("#start-button").css('display','none');
    nextQuestion();
}

function nextQuestion(){
    question++;
    quizButton.css("display", "none");
    quizAlert.css('display','none');
    quizAlert.removeClass("alert-success");
    quizAlert.removeClass("alert-warning");
    for (var i = 0; i < 4; i++){
        var ansId = "#ans" + i;
        $(ansId).removeClass("ans-right");               $(ansId).removeClass("ans-wrong");
    }
    if (question < questions.length){
        ql = setQuestsList();
        $("#quiz-title").html(questions[question]["title"]);
        $(".title-desc").css("display", "none");
        for (var i = 0; i < 4; i++){
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
    if (question == questions.length - 1) $("#end-button").css('display','block');
    else quizButton.css('display','block');

    if (curQuestion == question){
        quizAlert.css('display','inline-block');
        if (ql[i] == 0){
            $("#ans" + i).addClass("ans-right");
            quizAlert.addClass("alert-success");
            quizAlert.html(questions[question]["true_comment"]);
            score++;
        } else {
            $("#ans" + i).addClass("ans-wrong");
            $("#ans" + ql.indexOf(0)).addClass("ans-right");
            quizAlert.addClass("alert-warning");
            quizAlert.html(questions[question]["fake_comments"][ql[i] - 1]);
            
        }
        curQuestion++;
    }
}
function endTest(){
    $(".block-quiz").css('display','none');
    $(".block-end").css('display','block');
    $("#end-title").html("Поздравляем! Твой результат: +" + score * 25 + " баллов!");
    var currentScore = parseInt(getCookie("score"));
    document.cookie="score=" + (currentScore + score * 25).toString() + "; max-age=36000; path=/";
}
function setQuestsList() {
	ql = []
	while (ql.length != 4){
		var a = Math.floor(Math.random() * 4);
		if (ql.indexOf(a)==-1){
			ql.push(a)
		}
	}
    return ql;
}