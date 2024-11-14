const hasPaid = true;
const goodHealth = true;

if(hasPaid && goodHealth) {
    console.log("welcome to the class")
}else{
    console.log("go back home")
}

let age = 25;
if (age > 25){
    console.log("your age is above 25")
} else if(age < 25){
    console.log("your age is below 25")
} else {
    console.log('your age is 25')
}

let fruit = "banana";
if(fruit === 'banana'){
    console.log('we have banana in the store')
} else if(fruit === "orange"){
    console.log('we have orange in our store')
} else if(fruit === 'coconut'){
    console.log('coconut is in our store')
} else if(fruit === 'apple'){
    confirm.log('we have apple in our store')
} else{
    console.log('we do not have any fruit in our store')
}
let fruit1 = "apple";

switch (fruit1) {
    case "banana":
        console.log('it is banana')
        break;
    case "apple":
        console.log('it is apple')
        break;
    default:
        console.log("we do not have any fruit");
}

let age1 = 25;
switch (age1) {
    case age1 > 25:
        console.log("your age is above 25");
    break;
    case age1 < 25:
            console.log("your age is below 25");
    break;
    default:
          console.log("your age is 25");
}


const action = ["state", "stop", "pause"];
let userAction = "start";
let isLoggedIn = true;
switch(true) {
    case action.includes(userAction) && isloggedIn:
        console.log("Action permitted:" + userAction );
    break
    case action.includes(userAction) && !isLoggedIn:
        console.log("please log in to perform this action");
    break;
    default:
        console.log("no valid case found.");
}