// Task - 01
// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// };

// console.log(colors["golden rod"]);

// Task - 02
// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// car.passengerCapacity = 5;

// console.log(car);

// Task - 03

// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics.marks);

// Task - 4

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// const numOfStudent = Object.keys(student).length;

// console.log(numOfStudent);

// Task - 5

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for(let key in myObject){
    let value = myObject[key];
    console.log(`key: ${key}, Value: ${value}, Type: ${typeof value}`);
}