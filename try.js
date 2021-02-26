const fs=require('fs')
const data=fs.readFileSync('input-teleportation-e539.txt',{encoding:'utf8',flag:'r'}).split('\n')
//const data=fs.readFileSync('input-antivirus-a4cc.txt',{encoding:'utf8',flag:'r'}).split('\n')
const cases = data.shift()

const rows = 0                  // variable
const rows_before_num = 2       // variable

const multiple_rows = []
const obje = {}
console.log(data)

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

console.log(obje)