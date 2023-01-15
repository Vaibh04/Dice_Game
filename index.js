// Comment out this if you want to input Player 1 and Player 2 names by yourself

// var Player1 = prompt("Enter Player 1 Name");
// var Player2 = prompt("Enter Player 2 Name");
// document.querySelectorAll("p")[0].innerHTML=Player1;
// document.querySelectorAll("p")[1].innerHTML=Player2;


function refresh(){

var randomNumber1= Math.floor(Math.random() * 6)+1;  // Pick Random Number from 1-6

var randomImageSource1 = "images/dice"+randomNumber1+".png"; //A string will be made using concatenation with path:-  dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0]; // Storing the first img element in the variable

image1.setAttribute("src", randomImageSource1); // This will set the random dice image to Player 1




var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // Another way to directly change the image




// Now changing the title which will declare the winner

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 🚩";
} else if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}

}