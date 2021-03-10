const fs=require('fs')
const lib = require("./lib");

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const obje = lib.parser("input-scheduler-22e6.txt",{exception:0,double_number:0,numbers:true}) // input, rows:number of rows if fixed rows, exception: index of variable rows if exception, double: true if exception not single as in scoreboard

// main

// console.log(obje)
const result = {}

Object.keys(obje).forEach(key =>{
    if (key === key){       // change key to see only one case
        console.log(key)
        let data=obje[key]
        const maximum=data[0][1]
        const tasks=data[0][2] 
        console.log(maximum)
        console.log(tasks)
        data.splice(0,1)
        const mins=[]
        console.log(data)
        if(tasks<=maximum){
            data = data.map(e => e[0]+e[1])
            console.log(data)
            for (let i = 0;i<tasks;i++) {
                mins.push(Math.min.apply(null, data))
                data.splice(data.indexOf(Math.min.apply(null, data)), 1)
            }
            console.log(mins)
        }
        else{
            const rest_mins = []
            const rest_speeds = []
            const numbers = Math.trunc(tasks / maximum)
            const speeds = []
            const times= []
            const resto = tasks % maximum
            data.forEach(e => {
                speeds.push(e[1])
            })
            for (let i = 0;i < maximum;i++) {
                mins.push(data[speeds.indexOf(Math.min.apply(null, speeds))])
                speeds.splice(data.indexOf(Math.min.apply(null, speeds)), 1)
                data.splice(data.indexOf(Math.min.apply(null, speeds)), 1)
            }

            mins.forEach(e => {
                rest_speeds.push(e[1])
            })
            console.log(rest_speeds)
            for (let i = 0;i < resto;i++) {
                console.log(mins[rest_speeds.indexOf(Math.min.apply(null, rest_speeds))])
                rest_mins.push(mins[rest_speeds.indexOf(Math.min.apply(null, rest_speeds))], rest_speeds.indexOf(Math.min.apply(null, rest_speeds)) )
                rest_speeds.splice(mins.indexOf(Math.min.apply(null, rest_speeds)), 1)
            }
            mins.forEach(e => {
                times.push(e[1]*numbers + e[0])
            })
            console.log(mins)
            console.log(times)
            console.log(rest_mins)
            /*
            mins.forEach{
                
            }
            */
            
        
            
            
            
            
            
            
            

            for (let i = 0;i < resto;i++) {
                mins.push(Math.min.apply(null, speeds))
            }
        }
        // console.log(data,maximum,tasks)  // must be the only console in main
        result[key] = Math.max.apply(null, mins)
    }
})


// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
