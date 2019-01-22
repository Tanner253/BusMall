'use strict';

var allPics = [];

var options = document.getElementById('options')
var picture1 = document.getElementById("image1");
var picture2 = document.getElementById("image2");
var picture3 = document.getElementById("image3");

function getPic(name){
    this.filepath = `img/${name}`;
    this.name = name;
    this.views = 0
    this.clicks = 0
    allPics.push(this)

}

new getPic ('bag.jpg');
new getPic ('banana.jpg');
new getPic ('bathroom.jpg');
new getPic ('boots.jpg');
new getPic ('breakfast.jpg');
new getPic ('bubblegum.jpg');
new getPic ('chair.jpg');
new getPic ('cthulhu.jpg');
new getPic ('dog-duck.jpg');
new getPic ('dragon.jpg');
new getPic ('pen.jpg');
new getPic ('pet-sweep.jpg');
new getPic ('scissors.jpg');
new getPic ('shark.jpg');
new getPic ('sweep.jpg');
new getPic ('tauntaun.jpg');
new getPic ('unicorn.jpg');
new getPic ('usb-img.jpg');
new getPic ('water-can.jpg');
new getPic ('wine-glass.jpg');


var imgTags = [picture1, picture2, picture3];

function loadRandomImg(){
    for(var i = 0 ; i < 3; i++){
        var random = Math.floor(Math.random() * allPics.length);
        imgTags[i].src = allPics[random].filepath;
        imgTags[i].alt = allPics[random].name;
        imgTags[i].title = allPics[random].name;
        allPics[random].views++;
    }
}

options.addEventListener('click', handleClick);

function handleClick(event){


//  console.log(event.target.alt);

for(var i = 0 ; i < allPics.length ; i++){
if(event.target.alt === allPics[i].name){
    console.log('was clicked', event.target.alt);
    allPics[i].clicks++
    }
    
  }
  loadRandomImg();
}
loadRandomImg();
