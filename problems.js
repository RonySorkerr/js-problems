// Problem - 02
// let a = -1;
// if(a<0){
//     console.log("The number is Negative");
// }
// else{
//     console.log("the Number Is Positive");
// }

// Problem * 02
// let q = 3;
// if (q % 2== 0) {
//     console.log("the number is even");
// }
// else{
//     console.log("The Number Is odd");
// }

// Problem * 03
// let age = 15;
// if (age <= 12) {
//     console.log("Your Ticket Price is : 5 %");
// }
// else {
//     if (age <= 18) {
//         console.log("Your Ticket Price is : 10 $");
//     }
//     else {
//         if (age <= 60) {
//             console.log("Your Ticket Price is : 20 $");
//         }
//         else{
//             if(age >= 60){
//                 console.log("Your Ticket Price is : 15 $");
//             }
//         }
//     }
// }

// Problem - *04
// let year = 2006;
// if (year % 4 == 0){
//     console.log("The Year Is A leap year");
// }
// else{
//     console.log("The year isn't a leap year");
// }

// Problem - 05 

// let amount = 160;
// if (amount >= 100) {
//     console.log("The discount is : 20 $");
// }
// else if (amount => 50) {
//     console.log("The Discount Is : 10 $");
// }
// else{
//     console.log("The Discount Is : 0");
// }

let currentHour = new Date().getHours();
if(currentHour<12){
    console.log("Good Morning");
}
else if(currentHour<18){
    console.log("Good Evening");
}
else{
    console.log("Good Night");
}