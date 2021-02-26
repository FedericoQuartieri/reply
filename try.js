
const fs=require('fs')
const data=fs.readFileSync('input-teleportation-e539.txt',{encoding:'utf8',flag:'r'}).split('\n').slice(1)
const num = 7
const cases=null
const obje = {}
data.forEach((e,i
    
    
    ) => {
    if(i<cases){
    const a = data
    obje[i+1] = a.slice(i*num,(i+1)*num)

}
})
console.log(obje)