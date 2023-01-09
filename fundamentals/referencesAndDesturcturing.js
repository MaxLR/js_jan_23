let x = 5
let y = x
let z = y

x += 1

console.log(x, y, z)

let videoGame1 = { title: "Apex Legends", studio: "Epic Games", price: 0, platforms: ["pc", "xbox", "playstation"] }
let videoGame2 = videoGame1
//using the spread operator is only a shallow copy, nested objects/arrays are still references
let videoGame3 = { ...videoGame1 }
// this allows us to create a shallow copy of the platforms array, so it's unmodified when vG1's platforms change
// videoGame3.platforms = [...videoGame1.platforms]

videoGame2.price = 10

videoGame2.platforms.push("gamecube")

console.log(videoGame1.platforms, videoGame2.platforms, videoGame3.platforms)
console.log(videoGame1.price, videoGame2.price, videoGame3.price)


let iceCreamFlavors = ["chunky monkey", "vanilla", "mint chocolate chip", "rocky road", "birthday cake"]

// let flavor1 = iceCreamFlavors[0]
// let flavor2 = iceCreamFlavors[1]

let [flavor1, ,flavor3,, flavor2] = iceCreamFlavors;
console.log(flavor1, "and", flavor2, "and", flavor3);

// let temp = iceCreamFlavors[0]
// iceCreamFlavors[0] = iceCreamFlavors[iceCreamFlavors.length - 1]
// iceCreamFlavors[iceCreamFlavors.length - 1] = temp

//
[iceCreamFlavors[0], iceCreamFlavors[iceCreamFlavors.length - 1]] = [iceCreamFlavors[iceCreamFlavors.length - 1], iceCreamFlavors[0]]

console.log(iceCreamFlavors);