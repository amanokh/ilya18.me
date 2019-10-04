var time1 = $("#quiz-title");
var sec1 = 80;
var x = setInterval(function(){
    sec1-=1;
    time1.html("0:" + sec1);
    if (sec1 == 74) clearInterval(x);
},1000);