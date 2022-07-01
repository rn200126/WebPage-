window.onload= function (){
var paper = new Raphael(document.getElementById("veca"), 800, 600);
var audio = new Audio("Funk-tabulous.mp3");
var backGround = paper.rect(0,0,800,600);
backGround.attr({ fill: "lightblue"});
var circleone = paper.circle(220, 190, 90).animate({fill: "300-purple-pink", stroke: "#ffc0cb" , "stroke-width": 80, "stroke-opacity": 0.5}, 500);
var circletwo = paper.circle(620, 440, 90).animate({fill: "300-purple-pink", stroke: "#ffc0cb" , "stroke-width": 80, "stroke-opacity": 0.5}, 500);
var textone = paper.text(400, 320, 'Get ready!').attr({font: '80px Arial', 'font-weight': 'bold', 'fill': '#f0f', stroke: '#000'}).hide();
var texttwo = paper.text(400, 320, 'Here we go!').attr({font: '80px Arial', 'font-weight': 'bold', 'fill': '#f0f', stroke: '#000'}).hide();


function tOne() {
audio.play();
textone.show();
textone.animate({transform:"s1"},900, tTwo);
} 

function tTwo() {
textone.hide();
texttwo.show();
texttwo.animate({cy: 570, cx: 400}, 900, CircOne);
}


var startbutton=document.getElementById("button");
startbutton.onclick=tOne;

var cOne = paper.circle(100, 190, 30).hide();
var cTwo = paper.circle(300, 190, 30).hide();
var cThree = paper.circle(500, 190, 30).hide();
var cFour = paper.circle(700, 190, 30).hide();
var teOne = paper.text(100, 390, '1').attr({font: '80px Arial', 'font-weight': 'bold', 'fill': '#f0f', stroke: '#000'}).hide();
var teTwo = paper.text(300, 390, '2').attr({font: '80px Arial', 'font-weight': 'bold', 'fill': '#f0f', stroke: '#000'}).hide();
var teThree = paper.text(500, 390, '3').attr({font: '80px Arial', 'font-weight': 'bold', 'fill': '#f0f', stroke: '#000'}).hide();
var teFour = paper.text(700, 390, '4').attr({font: '80px Arial', 'font-weight': 'bold', 'fill': '#f0f', stroke: '#000'}).hide();
var sman = paper.image("snowman.jpg",0, 0,800,400).hide();
var snowg = paper.rect(0, 360, 7400, 7400).attr({fill:"white", stroke: "none"}).hide();
var snoww = paper.image("snowt.jpg",3, 360, 7400, 7400).hide();
var falw = paper.circle(100, 10, 10).attr({'fill': "white"}).hide();
var falwo = paper.circle(200, 10, 10).attr({'fill': "white"}).hide();
var falwt = paper.circle(300, 10, 10).attr({'fill': "white"}).hide();
var falwtr = paper.circle(400, 10, 10).attr({'fill': "white"}).hide();
var falwf = paper.circle(500, 10, 10).attr({'fill': "white"}).hide();
var falwfi = paper.circle(615, 10, 10).attr({'fill': "white"}).hide();
var snb = paper.circle(150, 450, 70).attr({fill:"white", stroke: "black"}).hide();
var snbt = paper.circle(150, 350, 55).attr({fill:"white", stroke: "black"}).hide();
var snbf = paper.circle(150, 270, 40).attr({fill:"white", stroke: "black"}).hide();
var eyeo = paper.circle(135, 270, 5).attr({fill:"black", stroke: "none"}).hide();
var eyet = paper.circle(170, 270, 5).attr({fill:"black", stroke: "none"}).hide();
var hat = paper.rect(120, 170, 60, 60).attr({fill:"black", stroke: "none"}).hide();
var hatr = paper.rect(110, 230, 80, 10).attr({fill:"black", stroke: "none"}).hide();
var mouth = paper.ellipse(150, 290, 20, 10).attr({fill:"brown", stroke: "black"}).hide();
var butto = paper.circle(150, 330, 5).attr({fill:"black", stroke: "none"}).hide();
var butti = paper.circle(150, 360, 5).attr({fill:"black", stroke: "none"}).hide();
var buttf = paper.circle(150, 390, 5).attr({fill:"black", stroke: "none"}).hide();
var cannon = paper.rect(600, 450, 30, 80).attr({fill:"grey", stroke: "black"}).hide();
var can = paper.ellipse(615, 580, 40,60).attr({fill:"red", stroke: "black"}).hide();
var finals = paper.circle(615, 450, 10).attr({'fill': "white"}).hide();

function CircOne() {
circleone.hide();
circletwo.hide();
texttwo.hide();
cOne.show();
cOne.animate({fill: "300-purple-pink", stroke: "#ffc0cb" , "stroke-width": 80, "stroke-opacity": 0.5}, 600, CircTwo);
teOne.show();
} 

function CircTwo() {
cTwo.show();
cTwo.animate({fill: "300-purple-pink", stroke: "#ffc0cb" , "stroke-width": 80, "stroke-opacity": 0.5}, 600, CircThree);
teTwo.show();
}

function CircThree() {
cThree.show();
cThree.animate({fill: "300-purple-pink", stroke: "#ffc0cb" , "stroke-width": 80, "stroke-opacity": 0.5}, 600, CircFour);
teThree.show();
}

function CircFour() {
cFour.show();
cFour.animate({fill: "300-purple-pink", stroke: "#ffc0cb" , "stroke-width": 80, "stroke-opacity": 0.5}, 300, Snow );
teFour.show();
}
circOne();

function Snow() {
cOne.hide();
cTwo.hide();
cThree.hide();
cFour.hide();
teOne.hide();
teTwo.hide();
teThree.hide();
teFour.hide();
sman.show();
snowg.show();
snb.show();
snbt.show ();
snbt.toFront();
snbf.show ();
snbf.toFront();
eyeo.show();
eyeo.toFront();
eyet.show();
eyet.toFront();
hat.show();
hat.toFront();
hatr.show();
hatr.toFront();
mouth.show();
mouth.toFront();
butto.show();
butto.toFront();
butti.show();
butti.toFront();
buttf.show();
buttf.toFront();
cannon.show();
cannon.toFront();
can.show();
can.toFront();
falw.show();
falw.toFront();
falw.animate({cy: 670}, 500, snowtwo);
} 

Snow();

function snowtwo(){
falw.hide();
falwo.show();
falwo.toFront();
falwo.animate({cy: 670}, 500, snowthree);
}

snowtwo();

function snowthree(){
falwo.hide();
falwt.show();
falwt.animate({cy: 670}, 500, snowfour);
}

snowthree();

function snowfour(){
falwt.hide();
falwtr.show();
falwtr.animate({cy: 670}, 500, snowfive);
}

snowfour();

function snowfive(){
falwtr.hide();
falwf.show();
falwf.animate({cy: 670}, 500,  snowsix);
}

snowfive();

function snowsix(){
falwf.hide();
falwfi.show();
falwfi.animate({cy: 570}, 500, snowee);
}
snowsix();
	
function snowee() {
falwfi.hide();
finals.show();
finals.animate({cy: 10 , cx: 615}, 500,'ease-in', doublesnow);
}
snowee();
function doublesnow() {
finals.animate({cy: 700, cx: 50, fill:"green"}, 500, 'ease-out', snotw);
}
doublesnow();
function snotw() {
finals.animate({cy: 300 , cx: 800, fill:"white"}, 500, 'ease-out', sniu);
}
snotw();
function sniu() {
finals.animate({cy: 270 , cx: 10, fill:"pink"}, 500, 'ease-out', lastsn);
}
sniu();
function lastsn() {
finals.animate({cy: 700, cx: 230,fill:"white"}, 500, 'ease-out', swee);
}
lastsn();
function swee() {
finals.animate({cy: 10 , cx: 615, fill:"yellow"}, 500,'ease-in',finalp);
}
swee();
function finalp() {
finals.animate({cy: 500, cx: 615, fill:"white"}, 500, 'ease-out', snowee);
}
finalp();



};