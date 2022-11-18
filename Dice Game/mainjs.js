//radom number-player 1 setup- generate random number 1-6

var randomNum1 = Math.floor(Math.random() * 6) + 1;
//mapping random images to folder
var randomImageSource = "images/dice" + randomNum1 + ".png";

//player 1 image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


//player 2 setup
var randomNum2 = Math.floor(Math.random() * 6) + 1;
//mapping random images to folder
var randomImageSource2 = "images/dice" + randomNum2 + ".png";

var image2=document.querySelectorAll("img")[1];//player 1 image
image2.setAttribute("src", randomImageSource2);

//main logic-decide who is winner

if(randomNum1 > randomNum2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins !"
}
else if(randomNum2 > randomNum1)
{
  document.querySelector("h1").innerHTML = "Player 2 wins !"
}
else
{
  document.querySelector("h1").innerHTML = "Draw"
}
