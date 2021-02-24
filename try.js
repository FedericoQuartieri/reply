
const fs=require('fs')
const data=fs.readFileSync('input-antivirus-a4cc.txt',{encoding:'utf8',flag:'r'}).split('\n').slice(1)
const num = 6
const obje = {}
data.forEach((e,i) => {
    if(i<10){
    const a = data
    obje[i+1] = a.slice(i*num,(i+1)*num)

}
})
console.log(obje)