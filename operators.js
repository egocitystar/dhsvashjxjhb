// operators in js are special simbols that performs opreations on one or More 
// files in our js file system.

// 1.Arrithmetic oprations
// // addition
// let sum = 5 + 3;
// console.log(sum)

// // subtractions
// let difference = 10 - sum;
// console.log (difference);

// // multiplication
// let products = sum * difference;
// console.log(products)

// // divition
// let quotient = products / 4;
// console.log(quotient)

// // modilus
// let remainder = quotient % 3;
// console.log(remainder);

// // assignment
// let x = 5;
// console.log(x)

// // addition assignment
// let y = 5;
// y  += 1;
// console.log(y)

// // subtraction assignment
// let z = 10;
// z -= y;
// console.log(z)

// 3. comparison Operators
// these Operators compare values and return a boolean value

// Equal
// console.log(5 == "5");

// // strict Equal
// console.log(5 === "5");

// // Equal
// console.log(5 != "5");

// // strict not Equal
// console.log(5 !== "5");

// let n = 3
// let a = 2
// console.log(n != a);

// // strict not Equal
// console.log(5 !== '5');
// let u = "emma"
// let b = 10 
// console.log(u !==z);

// // Greater than
// console.log(10 > 5)
// let g = 12
// let k = 10
// console.log(k > g)

// // less than
// console.log(3 < 2)
// let l = 12
// let i = 10
// let w = l - i
// console.log(x < w)

// greater than and equal
// console.log(4 >= 5);
// let u = 6
// let v = 6
// let n = u * 2
// console.log(u >= v)

// let o = v - 3

// table alignment

const hasDriverLicense = true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance;
console.log(carDrive);

const isAdult = true;
const isHungery = false;

const canEnter = isAdult && isHungery;
console.log(canEnter);
alert("dekeledi");

const knowsHTML = false;
const knowCSS = true;
const canDesignWebsite = knowsHTML ||  knowCSS;
console.log(canDesignWebsite);

const isAdmin = false;
const isSuperUser = false;
const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage);


 
// Declaring four variables using logical operators

// let andCondition = (5 > 3) && (10 > 5);
// console.log("andCondition:", andCondition);

// This variable uses the OR (||) operator. It will be true if either of the expressions (5 < 3 or 10 > 5) is true.

// let orCondition = (5 < 3) || (10 > 5);
// console.log("orCondition:", orCondition); 

// This variable uses the NOT (!) operator. It inverts the boolean value. Here, !(5 > 10) means "not (5 > 10)," which is true.

// let notCondition = !(5 > 10);
// console.log("notCondition:", notCondition); 

// This variable combines multiple logical operators (AND, OR, and NOT) to form a more complex condition.

// let complexCondition = ((5 > 3) && !(2 === 3)) || (4 < 2);
// console.log("complexCondition:", complexCondition); 
 
