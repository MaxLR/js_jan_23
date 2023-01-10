const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const iceCreamFlavors = ["Vanilla", "Chunky Munky", "Rocky Road", "Cherry Garcia"]

let doubledArray = []

//creating a doubled array without .map, we need to push every value into the array
myNums.forEach(num => {
    doubledArray.push(num * 2);
})

//creating a new array using the .map function
const doubleArrayMap = myNums.map(num =>  num * 2 )
const formattedFlavors = iceCreamFlavors.map(flavor => "Flavor: " + flavor + "!!!!!!!")

// console.log(doubledArray)
// console.log(doubleArrayMap)
// console.log(formattedFlavors)
// console.log(iceCreamFlavors)


let evenNums = []

myNums.forEach(num => {
    if(num % 2 === 0) {
        evenNums.push(num)
    }
});

const evenNumsMap = myNums.filter(num => {
    return num % 2 === 0;
});

const evenNumsMapImplicit = myNums.filter(num => num % 2 === 0);

console.log(evenNums)
console.log(evenNumsMap)
console.log(evenNumsMapImplicit)

const filteredIceCream = iceCreamFlavors.filter(flavor => {
    if(flavor === "Rocky Road" || flavor === "Chunky Munky") {
        return true;
    }
    return false;
})

console.log(filteredIceCream)