let age = 32;
let name = "Spencer";

console.log(age);

age = 33;
console.log(age);

const eyeColor = "blue";
let favoriteColor = "";
//scope is where variables can be referenced.
if(age == 33){
    // we are now in a differenct scope.
    //inside this scope, we can reference variables declared outside this scope.
    console.log(name);

    // declare a variable inside an inner scope
    favoriteColor = "blue";
}

console.log(favoriteColor);

// pull something from the HTML
document.querySelector("h1").style.color = favoriteColor


