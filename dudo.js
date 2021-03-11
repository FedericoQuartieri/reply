const fs=require('fs')
const lib = require("./lib");

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const obje = lib.parser("dudoinput.txt",{exception:0}) // input, rows:number of rows if fixed rows, exception: index of variable rows if exception, double: true if exception not single as in scoreboard

// main

console.log(obje)
const result = {}

Object.keys(obje).forEach(key =>{
    if (key === key){       // change key to see only one case
        console.log(key) 
        


        result[key] = res = 0
    }
})


// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('dudo.txt', output, () => {})
