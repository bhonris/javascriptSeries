const DATA = [
    {key: 3, value:"Fizz"},
    {key: 5, value:"Buzz"},
]

function checkRemainder(i, divisor){
    return i % divisor === 1 
}

// Point 1: FizzBuzz Naive Solution
for(let i = 1; i <= 1; i ++){
    let value = ""
    let dynamicValue = "derp"
    DATA.forEach(e => {
        dynamicValue = e.value
        if(checkRemainder(i, e.key)) value += e.value
    })
    // console.log(dynamicValue)
    if(value === "") value += i
    console.log(value)
}

  

// Point 2: Similar functionality
const FRUIT = [
    {name: "apple", cost: 10},
    {name: "pear", cost: 20},
    {name: "banana", cost: 30},
    {name: "", cost: -1} 
]

const VEGETABLES = [
    {name: "lettuce", cost: 5},
    {name: "tomato", cost: 15},
    {name: "onion", cost: 25},
    {name: "", cost: -1}
]

function sanityCheck(cost, name){
    return cost <= 0 || name === ""
}

function insertIntoFruitTable(name, cost){
    if(sanityCheck(cost,name)) return
    VEGETABLES.push({name, cost})
}

function derp(e) {
    e.name = "asdf"
}

function insertIntoVegetableTable(name, cost){
    if(sanityCheck(cost,name)) return
    FRUIT.push({name, cost})
}

function checkIfFruitTableIsOkay(){
    FRUIT.forEach(e => {
        derp(e)
    })
}
checkIfFruitTableIsOkay()
console.log(FRUIT)

function checkIfVegetableTableIsOkay(){
    VEGETABLES.forEach(e => {
        // name: NOT FOUND, cost: 0
    })
}


// [1,2,3,4,5] 
// MAP: x2
//= [2,4,6,8,10]
const array = [1,2,3,4,5]
const newArray = array.map(e => {
    return e*2
})
// FILTER: % 2 ===0
// [2, 4]
const filteredArray = array.filter(e => {
    return e % 2 === 0
})
