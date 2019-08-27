//For Loop 

// let favouriteChoco = [
//  "Mars",
//  "Snickers",
//  "Dairy Milk",
//  "Picnic"
// ];
// for (chocoIndex = 0; chocoIndex < favouriteChoco.length;
// chocoIndex++) {
//  console.log(favouriteChoco[chocoIndex]);
// }console.log(favouriteChoco.length)


// WHILE LOOP CHALLENGE
// Use a while loop to generate random numbers until 50 is reached
// Use the random card suit generator as an example.
// Be creative and research if you’re not sure
var num = 0;
var i = 1;
 while (num != 50 ) {
     i++;
      num = (Math.round(Math.random(num) * 100));
    //  console.log(`  -  ${num}`);
 }
console.log(`${num}  ---   Finally took ${i} attempts this time`)


