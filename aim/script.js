


var ball= document.getElementsByClassName("ball")[0];
var text=document.getElementById("texts");
var area=document.getElementsByClassName("ballarea")[0];
var time=document.getElementById("time");
var play=document.getElementById("play");
var plab=document.getElementsByClassName("playb")[0];
var gameo=document.getElementsByClassName("gameOver")[0];
var started=document.getElementById("gamestarted");
var x = Math.floor(Math.random() * 40);
var y = Math.floor(Math.random() * 90);
var i=60;
var tclick=0;
var avarage=0;
var clickc=0;
var clicks=0;
var on=10;
var gamestop="go";
playgame();
function playgame(){
plab.addEventListener("click",function(){
onTimer();
ball.style["marginTop"]=x+"%";
ball.style["marginLeft"]=y+"%";
started.style.display="block";
setTimeout(function(){
  started.style.display="none";

},1000)
ball.style.display="block";
ball.addEventListener("click",function(){
    ball.style["marginTop"]=x+"%";
    ball.style["marginLeft"]=y+"%";
    
    x = Math.floor(Math.random() *40);
y = Math.floor(Math.random() * 90);
tclick++;
changeColor();

text.innerHTML = "Score: "+tclick;
if(tclick>20){
  ball.style.width="10px";
  ball.style.height="10px";
}
if(tclick==25){
  i=i+10;
}




});

function changeColor(){
  var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + a + "," + b + "," + c + ")";
  document.getElementsByClassName("ball")[0].style.backgroundColor = bgColor;

}
function onTimer() {
    time.innerHTML = "Second: "+ i;
    i--;
    if (i < 0) {
    document.getElementsByClassName("gameOver")[0].style.display="block";
   avarage=(tclick/clickc)*100;
        document.getElementsByClassName("ball")[0].style.display = "none";
        document.getElementById("incorrect").innerHTML="Incorret Click: "+(clickc-tclick)
        document.getElementById("targethit").innerHTML="Target Hit: % "+Math.floor(avarage);
    }
    else {
      setTimeout(onTimer, 1000);

    }
  }
});
}
document.getElementById("restartb").addEventListener("click",function(){
  location.reload();
});
document.body.addEventListener("click",function(){
  clickc++;
  console.log(clickc)
})

