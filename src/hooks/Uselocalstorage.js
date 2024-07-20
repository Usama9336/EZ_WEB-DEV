import React, { useEffect, useState } from 'react'

 const prefix='codepen-clone-'

export default function Uselocalstorage(key,initialvalue) {
const prefixedKey=prefix+key
const [value,setvalue]=useState(()=>{
    const jsonvalue=localStorage.getItem(prefixedKey)
    if(jsonvalue!=null)
    return JSON.parse(jsonvalue)

if(typeof initialvalue==='function')
{
return initialvalue()
}
else{
return initialvalue
}
})

useEffect(()=>{
localStorage.setItem(prefixedKey,JSON.stringify(value))

},[prefixedKey,value])

  return [value,setvalue]
}
