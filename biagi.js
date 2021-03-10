const fs=require('fs')
const lib = require("./lib");

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const obje = lib.parser("input-server-a424.txt",{rows:2}) // input, rows:number of rows if fixed rows, exception: index of variable rows if exception, double: true if exception not single as in scoreboard

// main

console.log(obje)
const result = {}

Object.keys(obje).forEach(key =>{
    if (key === key){       // change key to see only one case
        console.log(key)    // must be the only console in main
        result[key] = res = 0
    }
})


// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('biagi.txt', output, () => {})
