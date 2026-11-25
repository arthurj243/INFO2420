// JavaScript Document
var imgArray = new Array(
    'CoupleBike1Lg2.jpg',
    'CoupleSnowBoardLg2.jpg',
    'HeliSkiingLg2.jpg',
    'SkiCoupleLg2.jpg'
    

);


var titleArray = new Array(
    'Couple on Bike',
    'Couple on Snowboard',
    'Heli Skiing',
    'Skiing Couple'
    
);
    
var imgPath = "images/fullsize/";

function swapImage(imgID) {

    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    var newImg;
    var textTitle;

    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;

    textTitle=titleArray[imgID];

        textDiv.innerHTML = textTitle;
}
    
function preloadImages() {		
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image;
        tmpImg.src = imgPath + imgArray[i];
    }
}