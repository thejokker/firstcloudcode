// const person = {
//     Name:" Jenkins ",
//     Age : 24,
//     Gender : "Male"
// }
// console.log(person)
// const alarmset = {
//     weekend: "lay in",
//     weekday: "Alarm on at 7am"
// }
// const alarm = (alarm,chillDay) => {
//     if (alarm == 1 && chillDay == 1) {
//         console.log("Why do you need an alarm on the weekend");
//         }
//     else if (chillDay == 1 && alarm != 1) {
//     console.log(alarmset.weekend) ;   
//     }
//     else if (alarm == 1 && chillDay != 1){
//     console.log(alarmset.weekday);
//     }
//     else {
//     console.log("Something is not right");
// }
// }
// alarm(1,)

// - Challenge 11:
//   Create a function that takes two numbers as a parameters and checks if the first one is greater than the second one.
const funcs = (num1,num2) => {
if (num1 > num2) {
    console.log('The first number is larger');
}
else if (num2 > num1){
    console.log('The second number is larger')
}
else if (num1 = num2) {
    console.log('Jackpot Baby')
}
else { 
    console.log('You  must use numbers with this function')
}
}
funcs(10,10)

