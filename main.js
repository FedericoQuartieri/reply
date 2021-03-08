const fs=require('fs');
const lib = require("./lib");

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const obje = lib.parser("input-t9-ee09.txt",{rows:28, numbers: false}) // input, rows:number of rows if fixed rows, exception: index of variable rows if exception, double: true if exception not single as in scoreboard

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
    if (key === "2"){       // change key to see only one case
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
        })

        let listone_all = []
        list.forEach((e,i) => {
            listone = []
            e[1].forEach((element, j) => {
                e[0].forEach((element1, j) => {
                    listone.push( element1 + element)
                })
            })
            listone_all.push(listone)
        })
        const rec = (lista) => {
            const a = []
            lista[0].forEach(element => {
                lista[1].forEach(element1 => {
                    if (element[element.length - 1] === element1[0]) {
                        a.push(element + element1[1])
                    }
                })
            })
            listone_all.shift()
            listone_all.shift()
            listone_all.unshift(a)
            const b = listone_all.slice()
            if (listone_all.length === 1) {
            } else {
                rec(b.splice(0, 2))
            }
        }
        const b = listone_all.slice()
        rec(b.splice(0,2))
        listone_all = listone_all[0]
        sums = []
        listone_all.forEach(e => {
            list = []
            e.split("").forEach((element, i)=> {
                list.push(e.substring(i,i+2))
            })
            list.pop()
            a = list.map((e, i) => {
                return data[alfabe.indexOf(e[1])+ 1][alfabe.indexOf(e[0])]
            })
            sum = a.reduce((acc, a) =>{
                return acc + a
            })
            sums.push(sum)
        })
        max = Math.max.apply(null, sums)
        // const pro = sums.slice()
        // console.log(sums.indexOf(max))
        // console.log(max)
        resu = []
        sums.forEach(e => {
            if (e === max) {
                resu.push(listone_all[sums.indexOf(e)])
                sums.splice(sums.indexOf(e), 1)
                listone_all.splice(sums.indexOf(e), 1)
            }
        })
        res = resu.sort().pop()
        // console.log(res)
        console.log(key)    // must be the only console in main
        result[key] = res
    }
})
/*
a = listone.map((e, i) => {
    return data[alfabe.indexOf(e[1])+ 1][alfabe.indexOf(e[0])]
})
*/

// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
