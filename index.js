var rand1=Math.floor(Math.random()*6)+1;
var randimg1 ="dice"+rand1+".png";
var randimg1src="images/"+randimg1;

var rand2=Math.floor(Math.random()*6)+1;
var randimg2 ="dice"+rand2+".png";
var randimg2src="images/"+randimg2;

img1= document.querySelectorAll("img")[0];
img1.setAttribute("src",randimg1src);

img2= document.querySelectorAll("img")[1];
img2.setAttribute("src",randimg2src);

if(rand1>rand2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(rand1<rand2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML="It's a Draw!";
}
