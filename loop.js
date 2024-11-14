// loops are used to execute a block of code repeatedly until specific conditions are met.

for (let i = 0; i < 5; i++) {
    console.log("hello from loop" + i);
};

const colors = ["red", "green", "blue", "yellow"]
for (let i = 0; i < colors.length; i++) {
    console.log("colors:", colors[i]);
}

const fruits = ["mango", "orange", "grape", "banana"]
for (let a = 0; a < fruits.length; a++) {
    console.log("fruits:", fruits[a]);
}

const students = [
    {name: "jhon", grade: 85},
    {name: "Martins", grade: 92},
    {name: "seyi", grade: 100}
]
for (let i = 0; i < students.length; i++) {
        console.log("students:", students[i].name, "Grade:", students[i].grade);
}
const  myself = [
    {name: "seyi", school:"new horizon", course: "fronted development"}
]
for (let i =0; i < myself.length; i++) {
    console.log("my name is " + myself[i].name, "my school is ", 
        myself[i].school, "my coures is ", myself[i].course)
}

// while loop
const color = ["red","blue","green","black"]
let i = 0;
while (i ) {
    console.log("count is:" + i)
    i++
}