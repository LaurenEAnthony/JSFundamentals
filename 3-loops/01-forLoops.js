/**
 * LOOPS
 * 
 * 3-loops
 *  01-forLoops.js
 */

 /**
  * Loops offer a quick and easy way to do something repeatedly
  * 
  * There are many different kinds of loos, but they all do roughtly the sam thing: 
  *     For statement
  *     do while
  *     while
  *     labeled
  *     break
  *     continue
  *     for in
  *     for of
  *     .forEach
  *     .map
  */

  //loop structure: a) creation of an indexing variable b) a run consition c) change to the indexing variable

  //count to 10 from 0 and lof the numbers:
  for (let i = 0; i <= 10; i++){
      console.log(i);
  } //checks condition, logs, changes index variable

  //loops can run infinitely
//   for (let i = 0; ; 1++){
//       console.log(i)
//   } //infinite loop is a bug

// counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i >= -25; i = i-3){
    console.log(i);
}

//display the letters in a name individually
let name = 'Kinkade';

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

//for loops can use lots of variables:
let start = 2; //start is where 'index' variable begins
let stop = Math.floor(Math.random()*30); //Math is built in JS object, random gives back number between 0 & 1 (could be decimal), low end = 0, high end = 30; Math.floor takes away decimal (whole numbers only)
let increment = 3;

for (let i = start; i <= stop; i = i+increment){
    console.log(i);
}