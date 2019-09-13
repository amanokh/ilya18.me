var question = -1;
var ql = [];

function startTest(){
    $(".block").addClass('block-wide');
    $("#answer-list").css("display", "block");
    nextQuestion();
}

function nextQuestion(){
    question++;
    if (question < questions.length){
        ql = setQuestsList();
        $("#quiz-alert").removeClass("alert-success");
        $("#quiz-alert").removeClass("alert-warning");

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
    if (ql[i] == 0){
        $("#quiz-alert").addClass("alert-success");
        $("#quiz-alert").html(questions[question]["true_comment"]);
    } else {
        $("#quiz-alert").addClass("alert-warning");
        $("#quiz-alert").html(questions[question]["fake_comments"][ql[i] - 1]);
    }
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