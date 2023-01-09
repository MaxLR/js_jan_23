let gamesList = ["God of War", "Mario Kart", "Connect 4", "Crusader Kings"]

const randomGame = function() {
    let randNum = Math.floor(Math.random() * 4)
    console.log(gamesList[randNum])
}

const randomGameArrow = () => {
    let randNum = Math.floor(Math.random() * 4)
    console.log(gamesList[randNum])
}

const welcomeMsg = (name) => {
    return "Welcome, prestigious visitor: " + name;
}

//arrow functions can implicitly return when running a single line of code
const implicitWelcome = (name) => "Welcome, prestigious visitor: " + name;

randomGameArrow()

console.log(welcomeMsg("Jonathan"));
console.log(implicitWelcome("Jonathan"));
console.log(implicitWelcome("Buddy"));
console.log(implicitWelcome("Killian"));


let numA = 15;

const determineEvenNum = (num) => {
    return num % 2 === 0;
}

console.log(determineEvenNum(1))
console.log(determineEvenNum(2))
console.log(determineEvenNum(3))
console.log(determineEvenNum(6))
console.log(determineEvenNum(8))

const isNumEven = (numA) => numA % 2 === 0;

//this does the same thing as line 40, but uses a named function instead of an anonymous one
const isNumEven2 = determineEvenNum(numA);
// console.log(isNumEven())
