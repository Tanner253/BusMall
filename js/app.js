/* eslint-disable no-empty */
'use strict';

var allPics = [];

var options = document.getElementById('options');
var picture1 = document.getElementById('image1');
var picture2 = document.getElementById('image2');
var picture3 = document.getElementById('image3');
var totalClicks = 0;
// var prevRandomArray = [];
// var randomArray = [];

function Product(name){
  this.filepath = `img/${name}.jpg`;
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  allPics.push(this);

}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep');
new Product('tauntaun');
new Product('unicorn');
new Product('usb-img');
new Product('water-can');
new Product('wine-glass');


var imgTags = [picture1, picture2, picture3];

function loadRandomImg(){
  for(var i = 0 ; i < imgTags.length; i++){
    var random = Math.floor(Math.random() * allPics.length);
    imgTags[i].src = allPics[random].filepath;
    imgTags[i].alt = allPics[random].name;
    imgTags[i].title = allPics[random].name;
    allPics[random].views++;
  }
}





// function getRandom() {
//   randomArray = [];
//   while (randomArray.length < 3) {
//     var random = Math.floor(Math.random() * allPics.length);
//     if (!randomArray.includes(random) && !prevRandomArray.includes(random)) {
//     }
//     randomArray.unshift(random);
//   }
//   prevRandomArray = randomArray;
// }

options.addEventListener('click', handleClick);

function handleClick(event){


  for(var i = 0 ; i < allPics.length ; i++){
    if(event.target.alt === allPics[i].name){
      console.log('was clicked', event.target.alt);
      allPics[i].clicks++;
    }
  }
  totalClicks++;
  if(totalClicks === 26 ){
    options.removeEventListener('click', handleClick);
    return;
    //show results graph
  }
  loadRandomImg();
}
loadRandomImg();
