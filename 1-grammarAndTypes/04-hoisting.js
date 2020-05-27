/**
 * HOISTING
 * 
 * 1-grammarAndTypes
 *  04-hoisting.js
 */

 //example 1:
 console.log(scissors);
 var scissors = 'blue';

 //example 1 breakdown:
 var scissors; //var gets pulled to top
 console.log(scissors); //console log undefined
 scissors = 'blue'; //not assigned until here

 //example 2:
 function hoistTest(){
     console.log(testVar); //undefined
     var testVar = 10; //assign variable
     console.log(testVar); //10
 }

 hoistTest();

 //example 2 breakdown: 
 function hoistTest(){
     var testVar;
     console.log(testVar);
     testVar = 10;
     console.log(testVar);
 }

 hoistTest();