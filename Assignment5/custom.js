function updateClock(date)
{
  date = date || new Date();
  var h = date.getHours() % 12;
  var m = date.getMinutes();
  var s = date.getSeconds();
  var hdeg = (h - 3)*30;
  var mdeg = (m - 15)*6;
  var sdeg = (s - 15)*6;
  document.getElementById("hour").style.transform = "rotate(" + hdeg + "deg)";
  document.getElementById("min").style.transform = "rotate(" + mdeg + "deg)";
  document.getElementById("secs").style.transform = "rotate(" + sdeg + "deg)";
}

function startUp()
{
  generateMyTimeZoneList();
  setInterval("updateClock(null)", 1000);
  setInterval('digiTime()',1000);
}
function digiTime() {
    var today = new Date();
    var h = today.getHours() % 12;
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
  //  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function cancelTimeZone()
{
  document.getElementById("addNew").style.marginTop = "1000px";
  setTimeout(addNewTZ_Aux1, 1000);
}

function addNewTZ()
{
  document.getElementById("addNew").style.display = "block";
  setTimeout(addNewTZ_Aux, 0);
}

function addNewTZ_Aux(){
  document.getElementById("addNew").style.marginTop = "0px";
}

function addNewTZ_Aux1(){
  document.getElementById("addNew").style.display = "none";
}

function generateMyTimeZoneList(){
  var outS = "";

  outS += "<a href='javascript:TZSelected(-1)'> Current Location </a><br>";

  // generate markup

  outS += "<a href='javascript:addNewTZ()'>+ New </a>";


  document.getElementById("placeList").innerHTML = outS;

}

function TZSelected(a)
{
  if(a == -1){
    updateClock(null);
  }
}
var myTimeZones = [];


function toggle(){
  var div = document.getElementById('clockWrapper');
  if (div.style.display !== 'none') {
      div.style.display = 'none';
  }
  else {
      div.style.display = 'block';
  }
  var div = document.getElementById('digitalWrapper');
  if (div.style.display !== 'block') {
      div.style.display = 'block';
  }
  else {
      div.style.display = 'none';
  }
};
function needleSelect(){
var selection = document.getElementById('needleSelect');
var styleIndex = selection.options[selection.selectedIndex].value;
var hR = document.getElementById('hr');
var mN = document.getElementById('minute');
var sC = document.getElementById('sec');
hR.style['background-color'] = 'blue';
mN.style['background-color'] = 'red';
sC.style['background-color'] = 'black';
if (styleIndex == 'thick') {
  hR.style.height = '25px';
  mN.style.height = '25px';
  sC.style.height = '25px';
}
else if(styleIndex == 'default'){
  hR.style.height = '2px';
  mN.style.height = '2px';
  sC.style.height = '1px';
}
else if(styleIndex == 'black'){
  hR.style['background-color'] = 'black';
  mN.style['background-color'] = 'black';
  sC.style['background-color'] = 'black';
}
};
function backgroundSelect(){
var selection = document.getElementById("bkg");
var bkgIndex = selection.options[selection.selectedIndex].value;
var bkg = document.getElementById('clockWrapper');
var digiBkg = document.getElementById('digitalWrapper');
if(bkgIndex == 'desert'){
  bkg.style.background = 'url(http://7-themes.com/data_images/out/8/6794041-free-sahara-desert-wallpaper.jpg)'
  bkg.style['background-size']= '100% 100%';
  bkg.style['background-repeat']= 'no-repeat';
  digiBkg.style.background = 'url(http://7-themes.com/data_images/out/8/6794041-free-sahara-desert-wallpaper.jpg)'
  digiBkg.style['background-size']= '100% 100%';
  digiBkg.style['background-repeat']= 'no-repeat';
}
else if (bkgIndex == 'forest') {
  bkg.style.background = 'url(http://7-themes.com/data_images/out/56/6964037-autumn-mist-forest-road.jpg)'
  bkg.style['background-size']= '100% 100%';
  bkg.style['background-repeat']= 'no-repeat';
  digiBkg.style.background = 'url(http://7-themes.com/data_images/out/56/6964037-autumn-mist-forest-road.jpg)'
  digiBkg.style['background-size']= '100% 100%';
  digiBkg.style['background-repeat']= 'no-repeat';
}
else if (bkgIndex == 'beach') {
  bkg.style.background = 'url(http://beachgrooves.com/wp-content/uploads/2014/07/beach.jpg)'
  bkg.style['background-size']= '100% 100%';
  bkg.style['background-repeat']= 'no-repeat';
  digiBkg.style.background = 'url(http://beachgrooves.com/wp-content/uploads/2014/07/beach.jpg)'
  digiBkg.style['background-size']= '100% 100%';
  digiBkg.style['background-repeat']= 'no-repeat';
}
}
function colorChange(){
var selection = document.getElementById('colors');
var selIndex =selection.options[selection.selectedIndex].value;
  var div = document.getElementById('clockWrapper');
  var digiDiv = document.getElementById('digitalWrapper');
  if(selIndex == 'default'){
    div.style.background = 'white';
    digiDiv.style.background = 'white';
  }
  else if (selIndex == 'red') {
    div.style.background = 'red';
    digiDiv.style.background = 'red';
  }
  else if (selIndex == 'blue') {
    div.style.background = 'blue';

    digiDiv.style.background = 'blue';
  }
  else if (selIndex == 'green') {
    div.style.background = 'green';
    digiDiv.style.background = 'green';
  }
  else if (selIndex == 'purple') {
    div.style.background = 'purple';
    digiDiv.style.background = 'purple';
  }
  else if (selIndex == 'orange') {
    div.style.background = 'orange';
    digiDiv.style.background = 'orange';
  }
};
function addTimeZone(){
var today = new Date();
var selection = document.getElementById('timeZones');
var selIndex =selection.options[selection.selectedIndex].value;
if(selIndex =='-12:00'){
  
}
else if (selIndex == '-11:00') {

}
else if (selIndex == '-10:00') {

}
else if (selIndex == '-09:30' ) {

}

}
function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);
        });
}
$(document).ready(function(){
    $('#button').each(function() {
        animationHover(this, 'shake');
    });
});