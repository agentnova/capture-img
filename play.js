window.addEventListener('load', init);

var time=5;
var score=0;
var playing;

var input-word = document.querySelector(#word-input);
var currentword=document.querySelector(#arrword);
var show-score=document.querySelector(#score);
var show-time=document.querySelector(#time);
var seconds=document.querySelector(#seconds);
var message=document.querySelector(#message);

var words= [
  'heksl',
  'asaa',
  'asas'
];



function init()
{

showword(words);

}

function showword(words)
{
  var index=Math.floor(Math.random() * words.length);
  currentword.innerHTML=words[index];
}
