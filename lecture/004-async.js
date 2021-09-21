function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function loadANumber() {
//     console.log("start loading")
//     await sleep(3000)
//     console.log("finish loading")
//     return 42
// }

// async function resolveY() {
//     const x = await loadANumber();
//     console.log(`value has returned: ${x}`)
//     return x + 1
// }


// let y = 5
// const resolvedY = resolveY().then(val => {
//     console.log(val)
// });
// console.log("Returning value of resolvedY:", resolvedY);



let A = 3;
const funcA = async () => {
    await sleep(5000)
    A = 5;
    console.log(`set value a in funcA`)
}

async function funcB() {
    await sleep(3000)
    A += 20
    console.log(`set value a in funcB`)
    
}

async function main() {
    await funcA()
    await funcB()
    console.log("Value of A:", A)
}

main()

