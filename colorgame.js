var numSquare = 6;
var colors = generateRandomColor(numSquare);

var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var ColorDisplay = document.querySelector("#ColorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquare = 3;
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
    ColorDisplay.textContent= pickedColor;
	 for (var i = 0; i < square.length; i++) {
	 	if (colors[i]) {
	 	square[i].style.background = colors[i];
	 	 } else{
	 		square[i].style.display ="none";
	 	}
	 }
});  

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare = 6;
	colors = generateRandomColor(numSquare);
	pickedColor = pickColor();
    ColorDisplay.textContent= pickedColor;
	 for (var i = 0; i < square.length; i++) {
	 	square[i].style.background = colors[i];
	 		square[i].style.display ="block";
	 	}
	 

});


resetButton.addEventListener("click", function(){
	//generate new color
	colors = generateRandomColor(numSquare);
	//pick a new color from array
	pickedColor = pickColor();
	//change display color to match picked color
	ColorDisplay.textContent= pickedColor;
	//change color of sqaure 
	for (var i = 0; i < square.length; i++) {
	square[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
	resetButton.textContent= "new color";
	messageDisplay.textContent= "";


})


ColorDisplay.textContent= pickedColor;


for (var i = 0; i < square.length; i++) {
	//add intial color to square
	square[i].style.background = colors[i];
	//add clicklistener to square
	square[i].addEventListener("click",function(){
	//grab color of clicked square
	var clickedColor =this.style.background;
	//compare color to pickedcolor
	if(clickedColor===pickedColor){
		 messageDisplay.textContent="correct!!";
		 resetButton.textContent= "PLAY AGAIN ?" 
		 changeColors(clickedColor);
		 h1.style.background = clickedColor;
	}else{
		this.style.background="#232323";
	    messageDisplay.textContent="try again"; 
	}
	


	});
	
}
function changeColors(color){
	//loop through all the color
	for (var i = 0; i < square.length; i++) {
		//change each color to the match given color
		square[i].style.background=color;
	}

}

function pickColor(){
  var random   =	Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num){
	//make an array
	var arr =[]
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push to an array
		arr.push(randomColor())
	}
	
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0-255
	 var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	 var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	 var b = Math.floor(Math.random()*256);

	 return "rgb(" + r + ", " + g + ", " + b +")"
}