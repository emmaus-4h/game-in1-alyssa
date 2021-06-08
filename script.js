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
var spelerY = 500; // y-positie van speler

var kogelX = 1220;    // x-positie van kogel
var kogelY = 400;    // y-positie van kogel

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
  fill("blue");
  rect (20,20, width - 2 * 20, height-2 * 20);



//wolk
fill ("white");
ellipse(150,150,133,97);
arc(150+50, 152, 80, 54, 49, HALF_PI, OPEN);
arc(150-60, 159,80,54,1, PI+HALF_PI, OPEN);

//boom
fill ("brown");
rect(1000, 400, 50, 300);
fill("green");
ellipse(1030, 400, 180, 180);

//grond
fill ("lightblue");
rect (20, 680, 3240 - 2 * 1000, 2200 - 2 * 1000);




};
/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function (x, y) {
  fill("red")
  ellipse(x-25, y-25, 150, 150);


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
  
   fill("black");
  rect(spelerX, spelerY, 10, 170);         // romp
  

  
  rect(spelerX - 75, spelerY + 40, 150, 10);   // arm
  
  
  fill("yellow")
rect (spelerX - 75, spelerY + 160, 150,10); // benen
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegVijand = function () {
 vijandX=vijandX+5;
 
 if (vijandX <0){
   vijandX = 1220;
 }
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */

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

  return true;
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
