const fs=require('fs')

const parser = (input,{rows=0, numbers = false, exception = null, double_number = 0}) => {
    const data = fs.readFileSync(input,{encoding:'utf8',flag:'r'}).split('\n')
    const cases = data.shift()
    const rows_when_cut = []
    const obje = {}
    if (exception !== null) {
        let curnum = 0
        data.forEach((e,i) => {                                         // trova estremi del case
            if (i === exception + curnum ) {
                curnum += parseInt(e.split(" ")[double_number]) + exception + 1 
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
        Object.keys(obje).forEach(key =>{    
            if (double_number === 0){                           // con il double num forse va tolto
                obje[key].splice([exception],1)
            }
            if (numbers){
                const res = obje[key].map(e=> e.split(" ").map(e => parseInt(e)))
                obje[key] = res
            }
        })
    } else {                                                            // se estremi case non variabili (rows fixed)
        data.forEach((e, i) => {
            if(i<cases){
                const a = data
                obje[i+1] = a.slice(i*rows,(i+1)*rows)
            }
        })
        if (numbers) {
            Object.keys(obje).forEach(key =>{
                const res = obje[key].map(e=> e.split(" ").map(e => parseInt(e)))
                obje[key] = res
            })
        }
    }
    return obje
}

module.exports = { parser };