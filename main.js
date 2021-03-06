const fs=require('fs')
const lib = require("./lib");

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const obje = lib.parser("input-riceboard-27ae.txt",{rows:1}) // input, rows:number of rows if fixed rows, exception: index of variable rows if exception, double: true if exception not single as in scoreboard

// main

console.log(obje)
const result = {}

Object.keys(obje).forEach(key =>{
    if (key === key){       // change key to see only one case
        const R = BigInt(obje[key][0][0])
        const N = BigInt((obje[key][0][1] * obje[key][0][1]) - 1)
        const M = BigInt(obje[key][0][2])
        const a = BigInt(R) ** BigInt(N)
        const res = ((BigInt(2)*(BigInt(1) - a)/(BigInt(1) - R)) + BigInt(1)) % M
        console.log(key)    // must be the only console in main
        result[key] = res
    }
})


// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
