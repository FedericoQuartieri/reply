const fs=require('fs')
const { brotliDecompressSync } = require('zlib')

// parse in che restituisce oggetto (obje) con chiave caso valore dati e richiede due variabili

//const data=fs.readFileSync('input-teleportation-e539.txt',{encoding:'utf8',flag:'r'}).split('\n')
//const data=fs.readFileSync('input-antivirus-a4cc.txt',{encoding:'utf8',flag:'r'}).split('\n')
const data=fs.readFileSync('input-xray-6716.txt',{encoding:'utf8',flag:'r'}).split('\n')

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


Object.keys(obje).forEach(key => {
    const res = obje[key].map(e=> e.split(" ").map(e => parseInt(e)))
    obje[key] = res
})

console.log(obje)

// main

const result = {}
// console.log(obje)

Object.keys(obje).forEach(key =>{
    if (true){
        console.log(key)
        let array = obje[key][1]
        res = Math.min.apply(Math, array)
        array = array.map(element => element - res)

        while (array.length !== 0) {
            zeros = []
            array.forEach((element,i) => {
                if (element === 0) {
                    zeros.push(i)
                }
            })
            
            let i = 0
            zeros.forEach((e) => {
                if (zeros[i] === zeros[i+1]- 1){
                    array.splice(zeros[i], 1)
                    zeros.splice(zeros.indexOf(zeros[i]), 1)
                    i -= 1
                }
                i += 1
            })
            zeros = []
            if (array[0] !== 0){
                array.unshift(0)
            }
            array.forEach((element,i) => {
                if (element === 0) {
                    zeros.push(i)
                }
            })
            if (zeros.length === 0 || (zeros[0] === 0 && zeros.length === 1)){
                var b = array
                array = []
                b.shift()
            } else {
                var b = array.splice(zeros[0], zeros[1])
                b.shift()
            }
            res1 = Math.min.apply(Math, b)
            if (res1 === Infinity) {res1 = 0}
            b = b.map(element => element - res1)
            res += res1
            empty = true
            b.forEach(e => {
                if (e !== 0) {
                    empty = false
                }
            })
            if (!empty) {
                array = b.concat(array)
            }
            if (array[0] === 0 && array.length === 1){
                array = []
            }
        }
        result[key] = res
    }
})

// console.log(result)

// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})


/*

e.forEach((element,i) => {
            if (element === 0) {
                zeros.push(i)
            }
        })
        const arsliced = []
        zeros.forEach((element,i) =>{
            a = e
            arsliced.push(a.slice(element,zeros[i+1]))
        })
        if (arsliced.length === 0){
            e = e
        } else {
            e = arsliced
        }

        */