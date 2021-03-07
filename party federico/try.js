const fs=require('fs')

// parse in che restituisce oggetto (obje) con chiave caso valore dati e richiede due variabili

//const data=fs.readFileSync('input-teleportation-e539.txt',{encoding:'utf8',flag:'r'}).split('\n')
//const data=fs.readFileSync('input-antivirus-a4cc.txt',{encoding:'utf8',flag:'r'}).split('\n')
const data=fs.readFileSync('input-party-81b9.txt',{encoding:'utf8',flag:'r'}).split('\n')

const cases = data.shift()

const rows = 2                 // variable
const rows_before_num = 2       // variable

const multiple_rows = []
const obje = {}

if (rows === 0) {
    let curnum = 0
    data.forEach((e,i) => {
        if (i === rows_before_num + curnum ) {
            curnum += parseInt(e) + rows_before_num + 1 
            multiple_rows.push(curnum)

        }
    })
    let numprev = 0
    data.forEach((e, i) => {
        if(i<cases){
            num = multiple_rows[i]
            const a = data
            obje[i+1] = a.slice(numprev,num)
            numprev = num
        }
    })
} else {
    data.forEach((e, i) => {
        if(i<cases){
            const a = data
            obje[i+1] = a.slice(i*rows,(i+1)*rows)
        }
    })
}

// main

const result = {}
console.log(obje)

Object.keys(obje).forEach(key =>{
    const positive_array = obje[key][1].split(" ").map(e => parseInt(e)).filter(e => e > 0) 
    console.log(positive_array)
    let res = 0
    if (positive_array.length === 0) {
        res = 0
    } else {
        res = positive_array.reduce((total, num) => {
            return total + num
        })
    }
    console.log(res)
    result[key] = res
})

console.log(result)

// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
