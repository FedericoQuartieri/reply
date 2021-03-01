const fs=require('fs')

// parse in che restituisce oggetto (obje) con chiave caso valore dati e richiede due variabili

const data=fs.readFileSync('input-teleportation-35b0.txt',{encoding:'utf8',flag:'r'}).split('\n')
const cases = data.shift()


const parser = (rows_before_num, rows = 0) => {
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
    return obje
}

const obje = parser(2) 

console.log(obje)

// main

const result = {}

Object.keys(obje).forEach(key =>{
    if (true){
        console.log(key)
        res = null
        result[key] = res
    }
})

// parse out che richiede un oggetto con chiave caso valore risultato

let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
