var randomNumber1= Math.random()*6;
randomNumber1= Math.floor(randomNumber1)+1;

var location1= "./images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src",location1);


var randomNumber2= Math.random()*6;
randomNumber2= Math.floor(randomNumber2)+1;

var location2= "./images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src",location2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else{
    document.querySelector("h1").textContent="Draw!";
}