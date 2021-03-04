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
        Object.keys(obje).forEach(key =>{                       //controllare se funziona
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
    /*
    Object.keys(obje).forEach(key => {
        const res = obje[key].map(e=> e.split(" ").map(e => parseInt(e)))
        obje[key] = res
    })
    */
    return obje
}

const obje = parser("input-antivirus-43b0.txt",2,6) // input, number if variable rows, number if fixed rows

// main

console.log(obje)
const result = {}

Object.keys(obje).forEach(key =>{
    if (key === key){       // change key to see only one case
        const data = obje[key].splice(1,5)
        const num = parseInt(data.shift())
        const trilist_all = []
        data.forEach((e, i) => {
            const trilist = []
            const array = e.split("")
            array.forEach((element, i) => {
                let a = e.split("")
                if (i  < e.length - num + 1 ){
                    trilist.push(a.splice(i, num).join(""))
                }
            })
            trilist_all.push(trilist)
        })
        const found_all = []
        trilist_all[0].forEach((element, i) => {
            const found = []
            for (let t = 1; t <= 3; t++) {
                if (trilist_all[t].includes(element)){found.push(element)}
            }
            found_all.push(found)
        })
        let letters = 0
        found_all.forEach((e, i) => {
            if (e.length === 3){
                letters = e[0]
            }
        })
        let res = ""
        data.forEach((e, i) => {
            const a = e.indexOf(letters)
            res += String(e.indexOf(letters)) + " "
        })
        console.log(key)    // must be the only console in main

        result[key] = res
    }
})


let output = ""
Object.keys(result).forEach(key => {
    output += `Case #${key}: ${result[key]}` + "\n"
})

fs.writeFile('output.txt', output, () => {})
