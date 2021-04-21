const fs=require('fs')
const lib = require("./lib");

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const obje = lib.parser("input-seats-61e8.txt",{rows:2, numbers : true}) // input, rows:number of rows if fixed rows, exception: index of variable rows if exception, double: true if exception not single as in scoreboard

// main

// console.log(obje)
const result = {}

Object.keys(obje).forEach(key =>{
    if (key == key){   
        console.log(key) 
        const ans=[]
        const days=obje[key][0][1]
        const data = obje[key][1]
        const myArray = []
        for (let i = 0; i < obje[key][0][0]; i++) {
            myArray.push(i)
        }
        let resi = []
        let day = 0
        /*
        const rec = (lista) => {
            day ++
            const current = []
            lista.forEach(e => {
                current.push(data.indexOf(e))
            })
            (day < days && rec(current))
        }
        rec(myArray)
        */
        let current_before = myArray
        for (let i=0; i<days;i++) {
            console.log(i)
            let current = []
            current_before.forEach(e =>{
                current.push(data.indexOf(e))
            })
            current_before = current
            current = [] 
        }
        //console.log(resi)
        // change key to see only one case
        // must be the only console in main
        result[key] = resi.join(" ")
    }
})


// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
