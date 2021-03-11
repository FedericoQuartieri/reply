"use strict"
const fs = require('fs')

let data = fs.readFileSync('./input-kits-7be9.txt', 'utf8')

data=data.split('\r').join('').split("\n")

let T=data[0]
data.splice(0,1)

let output=""




const divisore= (n) => {
    let num=[]
    for(let i=0; i<n+1; i++){
        if(n%i===0){
            num.push(i)
        }
    }
    return num
}

for(let i=0; i<1; i++){
    console.log(i)
    let s=0
    let l=[]
    let divisori=[]
    l=(data[(i*2)+1].split(' '))
    l.sort()
    l.reverse()
    console.log(divisori)
    for(let i=0; i<l.length; i++){
        divisori.push(divisore(l[i]))
    }
    let res = 0
    divisori[0].forEach(number => {
        const found = []
        divisori.forEach(numbers => {
            if (numbers.includes(number)){
                found.push(number)
            }
        })
        if (found.length === divisori.length){
            res += 1
        }
    })


    output += `Case #${i+1}: ${res}` + "\n"
}
console.log(output)
output=output.slice(0,-1)
fs.writeFileSync('./cagossi.txt', output)