const fs=require('fs')
const lib = require("./lib");

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const obje = lib.parser("input-antennas-4364.txt",{rows:3, numbers: true}) // input, rows:number of rows if fixed rows, exception: index of variable rows if exception, double: true if exception not single as in scoreboard

// main

// console.log(obje)
const result = {}



Object.keys(obje).forEach(key =>{
    if (key === key){       // change key to see only one case
        const antennas_to_use = obje[key][0][1]
        const antennas = obje[key][1]
        const buildings = obje[key][2]
        const ant_min = antennas.slice().sort((a, b) => a-b)
        const build_min = buildings.slice().sort((a, b) => a-b)
        const ant_max = antennas.slice().sort((a, b) => b-a)
        const build_max = buildings.slice().sort((a, b) => b-a)
        let min=0
        let min0=[]
        let min1=[]
        let max0=[]
        let max1=[]
        let mins=[]
        let max=0
        for(let i=0;i<antennas_to_use;i++){
            min0.push(ant_min.slice().reverse()[i]*build_min[i])
            min1.push(ant_min[i]*build_min.slice().reverse()[i])
        }
        for(let i=0;i<antennas_to_use;i++){
            max0.push(ant_max[i]*build_max[i])
            max1.push(ant_max.slice().reverse()[i]*build_max.slice().reverse()[i])
        }

        for(let i=0;i<antennas_to_use;i++){
            if(min0[i]<min1[i]){
                mins.push(min0[i])
            }
        }
        max=max0.reduce((a,b)=>a+b,0)
        //console.log(ant_min)
        /*
        if(summin0<summin1){
            min=summin0
        }
        else{
            min=summin1
        }
        //console.log(min)
        if(summax0>summax1){max=summax0}
        else{
            max=summax1
        }
        */
        //console.log(ant_min)
        //console.log(build_min)
        console.log(ant_max)
        console.log(build_max)
        console.log(min0)
        console.log(min1)
        console.log("boia dio")





        console.log(key)    // must be the only console in main
        result[key] = res = (min.toString()) + "boia dio" + (max.toString())
    }
})


// parse out che richiede un oggetto con chiave caso valore risultato
let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
