"use strict"
const fs = require('fs')

let data = fs.readFileSync('./input.txt', 'utf8')

data=data.split('\r').join('').split("\n")

let T=data[0]
data.splice(0,1)

let casi=""

for(let i=0; i<T; i++){
    let s=0
    let l=[]
    l=data[(i*2)+1].split(' ')
    l=l.filter(e => e>=0).forEach(e => s+=parseInt(e))

    let caso="Case #"
    caso+=(i+1)
    caso+=(": ")
    caso+=(s)

    casi+=caso
    casi+='\n'

    caso=""
    s=0
}

casi=casi.slice(0,-1)
fs.writeFileSync('./output.txt', casi)