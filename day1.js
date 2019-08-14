
// // this is an example 'for' loop

// // for (i=0; i<10; i++){
// //     // alows for the for statement to be presented
// //     console.log(i)
// // }

// //This is not a for loop 
// // console.log("Hello World",i)
// // Dot notation (object dot log. )

// //checking length of a string (PROPERTY)
// // console.log("Hello !!!!!!","Sam".length)
// // METHOD of changing string example
// // console.log ("HeLloW".toUpperCase())
// // console.log ("HeLloW".toLowerCase())

// // // Generating a random number 
// // console.log(Math.random()*10);                           //random number between 0 and 10 
// // console.log(Math.floor(Math.random()*100));              //random number between 0 and 100 with round down aka no decimals 
// // i=Math.random()*10
// // console.log(i)
// // console.log(i(Math.floor))
// // console.log(i.Math.ceil))

// //Using the trim function \
// //  console.log(greet =("                        hello                         ".trim()))
// // str1 = "To "
// // str = "The good life "
// // console.log(str.slice(4,8))                                 // makes  cut from the original chosen string between specified
// // console.log(str.substr(4,4))                                // make a cut however second number defines length of cut 
// // console.log(greet.concat(' ', str1,' ', str))
// // console.log("All Around the world".toUpperCase().charAt(7))

// // // //Variables 
// // let favouritedrink  = "Tea or Coffee ";
// // let sugary = "with sugar"
// // let milky = " and milk."
// // let sugarn = "without sugar"
// // let milkn = " and no milk."
// // let Question = "My favourite drinks are "
// // console.log(Question + favouritedrink + sugary + milky);
// // console.log(Question + favouritedrink + sugarn + milkn);
// // let myfavdrink = 'Coffee' 
// // console.log(`My favourite drink is ${myfavdrink}`)
// // let alph = "abcdefghijklmnopqrstuvwxyz"
// // let alph2 = alph.toUpperCase();
// // console.log(alph2)

// // console.log(alph + alph2)

// // // Activity One 
// // var Name = "Elis";
// // let Age = "24" ;
// // let FavouriteColour = "Green";
// // console.log(`My name is ${Name}, Age is ${Age}  And favourite Colour is ${FavouriteColour}`)

// // //Activity 2 
// // var breakfast ="Bread "; 
// // let Lunch = "   Subway ".trim(); 
// // var Dinner = "        Not Sure "; 
// // console.log(`Meals for Today; Breackfast is ${breakfast}; Lunch shall be ${Lunch} ; and Dinner will be ${Dinner.trim()}`)
// //  breakfast ="Cereal "; 
// //  Lunch = "    Packed Lunch "; 
// //  Dinner = "  Dominos For  Sure "; 
// // userin = "" 
// // console.log(`Meals for Tomorrow; Breackfast is ${breakfast}; Lunch shall be ${Lunch.trim()} ; and Dinner will be ${Dinner.trim()}`)

// // Activity 4 
// var horiz = "-----------------------";
// var blank = "       |       |     ";
// var s1 = "   O   ";
// var s2 = "   X   ";
// var s3 = "   X   ";
// var s4 = "   X   ";
// var s5 = "   O   ";
// var s6 = "   O   ";
// var s7 = "   X   ";
// var s8 = "   O   ";
// var s9 = "   X   ";
// console.log(" ");
// console.log(blank);
// console.log(`${s1}|${s2}|${s3}`);
// console.log(blank);
// console.log(horiz);
// console.log(blank);
// console.log(`${s4}|${s5}|${s6}`);
// console.log(blank);
// console.log(horiz);
// console.log(blank);
// console.log(`${s7}|${s8}|${s9}`);
// console.log(blank);

// // Additional activity try and log first multiples of five 

// var five; for (five = 5; five < 55; five += 5 )
// console.log(five);



// IF / Else Statements 
// console.log("How young are you ?");
//     var age = 17;
//     console.log(`You are ${age}`);

// if (age >= 18);{
//     console.log('Because you are above, or 18 you should get drinking');
// }
// else {
//     console.log(`${age} Go home little one !! It is past your bed time.`);
// }




// if ( 1 != "1"){
//     console.log(true);
// }
// else {
//     console.log(false);


// var place = "Swansea"
// var weather = "Rainy"
// if (place == "Manchester" && weather == "Sunny"){
//     console.log("Check again")
// }
// else if (place == "Manchester" && weather == "Rainy"){
//     console.log("As expected")
// }
// else {
//     console.log(`Probably ${weather} in ${place}`)
// }




// // if Else Challenges 

// var password = "p4ssword";
// if (password.length >= 8 ){
//     console.log(password)
// }
//         else {
//             console.log("Password is not the correct character length");
//         }


// // Challenge two 
// var num = 5
// var num3 = num % 3
// console.log(`3=${num3}`)
// var num5 = num % 5
// console.log(`5=${num5}`)

// if ( num3 == 0 || num5 == 0 ){
//     console.log('This number is divisible by both five or three.')
// }
//     else {
//         console.log('This number is not divisible by five and three.')
//     }

/*
var num =  3
var num3 = num%3
var num5 = num%5
console.log(`3=${num3},5=${num5}`)
let ans1 = "Buzz"
let ans2 = "Fizz"
  if (num3==0 ){
      console.log(ans1)
  }
  else if (num5==0){
      console.log(ans2)
  }
  else if (num3 == 0 && num5 == 0){
      console.log(ans1+" "+ans2)
  }
else {
    console.log('Criteria not met, not divisible by either 3 or 5')
}
*/
// num = 101;
// nums = num.toString()
// num1 = nums.split("").reverse("").join("");
// console.log(num1);
// if (num == num1 ){
//     console.log ("True");
// }
//     else {
//         console.log("False");
//     }


// var num = 11;
// var num1 = num.split(" ");
// console.log(num1);



// Arrays 
// let coffeeChoice = [
//     "Owen - sspresso",
//     "Hamad - with sugar",
//     "Sig - no sugar",
//     "Anna - no milk",
// ];
// console.log(coffeeChoice.length)                
// coffeeChoice.push("Donna - Esspresso")          // . push used to add extra items to the array
// console.log(coffeeChoice)
// console.log(coffeeChoice.length)
// coffeeChoice.pop();                         //  .pop used to remove from the array
// console.log(coffeeChoice)
// console.log(coffeeChoice.length)

//Favourite websites activity
 var websites = ['Facebook',
 'insta',
 'Reddit'];
 console.log(websites);
 websites.push('BBC','Apple');
//  console.log(websites);
 websites.pop();
//  console.log(websites);
websites.shift('Apple');
// console.log(websites);
websites.unshift('Flipboard','Apple');
// console.log(websites);
websites.splice(0,0,'Google');
let bestwebs=websites.slice(1,3);console.log(bestwebs);
console.log(websites);
websites.sort();console.log(websites);
websites.reverse();console.log(websites);
