const fs=require('fs')

// parse in che restituisce oggetto (obje) con chiave caso valore dati

const parser = (input,rows_before_num, rows = 0) => {
    const data = fs.readFileSync(input,{encoding:'utf8',flag:'r'}).split('\n')
    const cases = data.shift()
    const rows_when_cut = []
    const obje = {}
    if (rows === 0) {
        let curnum = 0
        data.forEach((e,i) => {                                         // trova estremi del case
            if (i === rows_before_num + curnum ) {
                curnum += parseInt(e) + rows_before_num + 1 
                rows_when_cut.push(curnum)
            }
        })
        let numprev = 0
        data.forEach((e, i) => {                                        // divide array secondo gli estremi
            if(i<cases){
                num = rows_when_cut[i]
                const a = data
                obje[i+1] = a.slice(numprev,num)
                numprev = num
            }
        })
        Object.keys(obje).forEach(key =>{                               // vedere se funziona
            obje[key].splice([rows_before_num],1)
        })
    } else {                                                            // se estremi case non variabili (rows fixed)
        data.forEach((e, i) => {
            if(i<cases){
                const a = data
                obje[i+1] = a.slice(i*rows,(i+1)*rows)
            }
        })
    }
    return obje
}

const obje = parser("input-riceboard-27ae.txt",2,1) // input, number if variable rows, number if fixed rows
/*
Object.keys(obje).forEach(key => {
    const res = obje[key].map(e=> e.split(" ").map(e => parseInt(e)))
    obje[key] = res
})
*/
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

fs.writeFile('output.txt', output, () => {})
