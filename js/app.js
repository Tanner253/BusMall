/* eslint-disable no-empty */
'use strict';

var allPics = [];

var options = document.getElementById('options');
var picture1 = document.getElementById('image1');
var picture2 = document.getElementById('image2');
var picture3 = document.getElementById('image3');
var totalClicks = 0;
var ctx = document.getElementById('myChart');
var votes = [];
var titles = [];

function Product(name, votes){
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

var prevUsedNumbers = [];

function loadRandomImg(){
  var usedNumbers = [];
  for(var i = 0 ; i < imgTags.length; i++){
    var random = Math.floor(Math.random() * allPics.length);
    imgTags[i].src = allPics[random].filepath;
    imgTags[i].alt = allPics[random].name;
    imgTags[i].title = allPics[random].name;
    allPics[random].views++;
    if(random === usedNumbers[0] || random === usedNumbers[1] || random === usedNumbers [2]){
      i--;

    }else if(random === prevUsedNumbers[0] || random === prevUsedNumbers[1] || random === prevUsedNumbers[2]){
      i--;
    }else
      usedNumbers.push(random);
  }
  prevUsedNumbers = usedNumbers.slice(0);
}





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
    updateChartArrays();
    createChart();
    //show results graph
  }
  loadRandomImg();
}

loadRandomImg();

function updateChartArrays(){
  for(var i = 0; i < allPics.length; i++){
    titles[i] = allPics[i].name;
    votes[i] = allPics[i].clicks;
  }
}



function tallyVotes(thisPic){
  for(var i = 0 ; i < allPics.length ; i++){
    if(thisPic === allPics[i].clicks){
      allPics[i].clicks++;
      updateChartArrays();
    }
  }
}


function createChart(){

  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: titles,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',  
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)', 
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)', 
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
}
document.getElementById('options').addEventListener('click', function(event){
  if(event.target.id !== 'options'){
    tallyVotes(event.target.id);
  }
});

