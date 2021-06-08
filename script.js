/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 100; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  background("blue");
  //fill("blue");
  //rect (20,20, width - 2 * 20, height-2 * 20);

}

/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function (x, y) {
  fill("green")
  ellipse(vijandX, vijandY, 150, 150);


};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function (x, y) {


};



/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function (x, y) {
  fill("black");
  ellipse(spelerX, spelerY, 70, 70);        // hoofd
  rect(spelerX, spelerY, 10, 170);         // romp
  rect(spelerX - 75, spelerY + 40, 150, 10);   // arm
rect (spelerX - 75, spelerY + 160, 150,10); // benen
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function () {
  vijandX = vijandX + 1;
  vijandY = vijandY + 1
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */


//met hulp van site vanaf hier geprobeerd een score te krijgen//
var myGamePiece;
var myObstacles = [];
var myScore;

function startGame() {
  myGamePiece = new component (30,30, "red", 10, 160);
  myScore = new component ("30px", "Consolas", "black", 280, 40,"text");
  myGameArea.start();
}  // met hulp van een site proberen een score erbij te zetten//


function component(width, height, color, x, y, type) {
  this.type = type;
  this.width = width; 
  this.speedX = 0;
  this.speedY = 0; 
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    if (this.type == "text") {
      ctx.font = this.width + " "+ this.height;
      ctx.fillStyle = color;
      ctx.fillText(this.text, this.x, this.y);
    } else {
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
} // score proberen toevoegen//

function updateGameArea() {
  var x, height, gap, minHeight, maxHeight, minGap, maxGap;
  for (i = 0; i < myObstacles.length; i += 1) {
    if (myGamePiece.crashWith(myObstacles[i])) {
      myGameArea.stop();
      return;
  }  
}
myGameArea.clear();
myGameArea.frameNo +=1;
if (myGameArea.frameNo == 1 || everyinterval(150)){x = myGameArea.canvas.width;
minHeight = 20;
maxHeight= 200;
height = Math.floor(Math.random()* (maxHeight-minHeight+1)+minHeight);
minGap = 50;
maxGap = 200;
gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
myObstacles.push(new component(10, height, "green", x, 0));
myObstacles.push(new component(10, x - height - gap , "green", x, height + gap));
}
for (i = 0; i < myObstacles.length; i += 1) {
  myObstacles[i].speedX = -1;
  myObstacles[i].newPos();
  myObstacles[i].update();
}

myScore.text = "SCORE: " + myGameArea.frameNo;
myScore.update();
myGamePiece.newPos();
myGamePiece.update();
} // poging score toevoegen//

var beweegKogel = function () {


};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function () {
  if (keyIsDown(UP_ARROW)) {
    spelerY = spelerY - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    spelerY = spelerY + 5;
  }
  spelerX = spelerX + 1;



};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function () {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function () {

  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function () {

  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background(0, 191, 255);
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegVijand();
      beweegKogel();
      beweegSpeler();



      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }

      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
