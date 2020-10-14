window.addEventListener('load', init);
var levels={
easy:5,
medium:3,
hard:2
}

var currentlevel=levels.easy;
var time = currentlevel;
var score = 0;
var playing;
var loadtime=6;

var inputword = document.getElementById("wordinput");
var currentword = document.getElementById("arrword");
var showscore = document.getElementById("score");
var showtime = document.getElementById("time");
var seconds = document.getElementById("seconds");
var message = document.getElementById("message");
var main=document.getElementById("main");
var secmain=document.getElementById("secondmain");
var finalscore=document.getElementById("finalscore");
var result=document.getElementById("result");
var timer = document.getElementById("timer");


var words = [
'Amount',
'Instinctive',
'Left',
'Letter',
'Type',
'Living',
'Enormous',
'Stage',
'Cure',
'Wave',
'Gorgeous',
'Melt',
'Glue',
'Decisive',
'Sheep',
'Cry',
'Frail',
'Unbiased',
'Hapless',
'Color',
'Pickle',
'Stroke',
'Hobbies',
'Forgetful'
];

function init() {
    timerstart();
    showword(words);
    inputword.addEventListener('input', checkmatch);
    setInterval(countdown, 1000);
    setInterval(status, 50);

}

function timerstart(){
  setInterval (timerload, 1000);
}


function timerload(){
   if (loadtime > 0) {
        loadtime--;
        playing=false;

   }
   else if(loadtime==0){
      main.style.display="none";
      secmain.style.display="grid";
      playing=true;
   }
   timer.innerHTML = loadtime;
}

function checkmatch() {
    if (match()) {
        playing = true;
        time = currentlevel+1;
        showword(words);
        inputword.value = '';
        score++;
    }
    if (score == -1) {
        showscore.innerHTML = 0;
    } 
    else {
        showscore.innerHTML = score;
        finalscore.innerHTML=score;
    }
}

function match() {
    if (inputword.value == currentword.innerHTML) {
        message.style.color="green";
        message.innerHTML = 'Correct'
        inputword.style.border="2px solid green";
        return true;
    } 
    else {
     message.innerHTML = '&nbsp;';
     inputword.style.border="2px solid red";
     return false;
    }
}


function showword(words) {
    var index = Math.floor(Math.random() * words.length);
    currentword.innerHTML = words[index];
}

function countdown() {
  if(playing){
    if (time > 0) {
        time--;
    } 
    else if (time == 0) {
        playing = false;
    }
    showtime.innerHTML = time;
   }
}

function status() {
    if (!playing && time == 0) {
        message.style.color="red";
        message.innerHTML = 'Game over';
        score = -1;
        secmain.style.display="none";
        main.style.display="none";
        result.style.display="grid";
        result.style.animation= "0.5s ease-out 0s 1 slideInFromLeft";
    }
    if(message.innerHTML==''){
        message.innerHTML='&nbsp';
    }
}
