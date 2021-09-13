function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function loadANumber() {
//     console.log("start loading")
//     await sleep(3000)
//     console.log("finish loading")
//     return 69
// }

// async function resolveY() {
//     const x = await loadANumber(); // x = Promise<69>
//     console.log(`value has returned: ${x}`)
//     return x + 1
// }
// let y = 5
// resolveY().then(value => {
//     y = value
//     console.log(`value of y: ${value}`)
// })
// console.log(y);


// let a = 3;
// const funcA = async () => {
//     await sleep(5000)
//     a = 5;
//     console.log(`set value a in funcA`)
// }

// async function funcB() {
//     a += 20
//     console.log(`set value a in funcB`)
//     await sleep(3000)
// }

// funcA()
// funcB().then(value => {
//     console.log(a);
// })

const objects = {
    name: "killer queen",
    skill: "bites the dust",
    level: 5
}

// const nameOnly = {name: objects.name}
// const skillAndLevel = {skill: objects.skill, level: objects.level}

const { name, ...skillAndLevel} = objects
console.log({name});
console.log(skillAndLevel)

const someObject = {a: 3}
// const a = someObject.a
// const b =someObject.b
// const bruh = a ? a : 10
// const moment = b ? b : 5
const {a: bruh = 10, b: moment = 5} = someObject
console.log(bruh)
console.log(moment)