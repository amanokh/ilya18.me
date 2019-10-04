var time = $("#timer");
var sec = 60;
setInterval(function(){
    sec-=1;
    time.html("0:" + sec);
},1000);