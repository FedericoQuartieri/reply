const fs=require('fs')
const lib = require("./lib");

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const obje = lib.parser("input-t9-3e27.txt",{rows:28, numbers: false}) // input, rows:number of rows if fixed rows, exception: index of variable rows if exception, double: true if exception not single as in scoreboard

// main


const result = {}

Object.keys(obje).forEach(key =>{
    const res = obje[key].map((e, i)=> {
        if (i !== 27){
            return e.split(" ").map(e => parseInt(e))
        } else {
            return e
        }
    })
    obje[key] = res
})





Object.keys(obje).forEach(key =>{
    if (key === key){       // change key to see only one case
        const data = obje[key]
        const dict={
            '2':['A','B','C'],
            '3':['D','E','F'],
            '4':['G','H','I'],
            '5':['J','K','L'],
            '6':['M','N','O'],
            '7':['P','Q','R','S'],
            '8':['T','U','V'],
            '9':['W','X','Y','Z']
        }
        alfabe = ['A','B','C','D','E','F', 'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        let list = []
        data[27].split("").forEach((e, i)=> {
            list.push(data[27].substring(i,i+2))
        })
        list.pop()
        list = list.map(e=>{
            return [dict[e[0]], dict[e[1]]]
            //console.log(dict[e[0]],dict[e[1])
        })
        // find first 

        listone = []
        list[0][0].forEach((e, i) => {
            list[0][1].forEach(element =>{
                listone.push(e + element)
            } )
        })
        a = listone.map((e, i) => {
            return data[alfabe.lastIndexOf(e[1])+ 1][alfabe.lastIndexOf(e[0])]
        })
        console.log(list)
        console.log(listone)
        console.log(a)
        const res = []
        const conse = listone[a.lastIndexOf(Math.max.apply(null, a))]
        res.push(conse[0], conse[1])
        // fine find first

        list.shift()
        list.forEach((e,i) => {
            listone = []
            e[1].forEach((element, j) => {
                e[0].forEach((element1, j) => {
                    listone.push( element1 + element)
                })
            })
            a = listone.map((e, i) => {
                return data[alfabe.indexOf(e[1])+ 1][alfabe.indexOf(e[0])]
            })
            const conse = listone[a.lastIndexOf(Math.max.apply(null, a))]
            console.log(listone)
            console.log(a)
            res.push(conse[1])
        })
        console.log(res.join(""))

        // console.log(key,data)    // must be the only console in main
        result[key] = res.join("")
    }
})


// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
