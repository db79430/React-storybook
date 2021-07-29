import React, {useState} from "react";


export default {
    title: 'UseMemo demo'
}


export  const Example1 =() => {
    const [a,setA] = useState(3)
    const [b,setB] = useState(3)
    let resultA = 1
    let resultB = 1
     for(let i=1; i<=a; i++) {
         let fake =0;
         while (fake < 1000000) {
             fake ++
             const fakeValue = Math.random()
         }
         resultA = resultA * i
     }
    for(let i=1; i<=b; i++) {
        resultB = resultB * i
    }


    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b:{resultB}
        </div>


    </>


}