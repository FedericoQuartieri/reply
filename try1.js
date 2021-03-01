const fs=require('fs')

// parse in che restituisce oggetto (obje) con chiave caso valore dati e richiede due variabili

let data=fs.readFileSync('input-teleportation-35b0.txt',{encoding:'utf8',flag:'r'}).split("\n")
//let data=fs.readFileSync('input-antivirus-a4cc.txt',{encoding:'utf8',flag:'r'}).split('\n')
//let data=fs.readFileSync('input-party-81b9.txt',{encoding:'utf8',flag:'r'}).split('\n')

const cases = data.shift()
data.splice(data.length-1)

const rows =6            // variable
const selector = null    // variable, null se non richiede recursive
const obje = {}

function del(array,selector,curIndex,c=0){
        if(data.length===0){return obje;}
        let length=parseInt(array[selector])+selector
        obje[c+1]=[]
        for(let j=0;j<=length;j++){
            if(j!==selector){
                obje[c+1].push((data[0]))
                data.splice(0,1)
            }
            else {
                data.splice(0,1)
            }
        }
        c++
        del(data,selector,curIndex+length+1,c)  
}

if (selector===null){
    data.forEach((e, i) => {
        if(i<cases){
            const a = data
            obje[i+1] = a.slice(i*rows,(i+1)*rows) 
        }})}
else{
    del(data,selector,0)
}

console.log(obje)