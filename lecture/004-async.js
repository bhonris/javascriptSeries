function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadANumber() {
    console.log("start loading")
    await sleep(3000)
    console.log("finish loading")
    return 42
}

async function resolveY() {
    const x = loadANumber();
    console.log(`value has returned: ${x}`)
    return x + 1
}
let y = 5


let A = 3;
const funcA = async () => {
    await sleep(5000)
    A = 5;
    console.log(`set value a in funcA`)
}

async function funcB() {
    A += 20
    console.log(`set value a in funcB`)
    await sleep(3000)
}

async function main() {
    funcA()
    funcB()
    console.logA()
}

main()

