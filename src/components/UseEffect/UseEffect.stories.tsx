import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect memo'
}


export const SimpleExample = () => {
    const [fake, setFake] =useState(1)
    const [counter, setCounter] = useState(1)
    console.log("SetTimoutExample")

    useEffect(() => {
        console.log("UseEffect every render")
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log("UseEffect only first render (componentDidMount)") //  только в первый render
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log("UseEffect first render and every counter change")
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)

    }, [])
    useEffect(() => {
        console.log("tick"+ counter)
        setInterval(() => {
           setCounter((state) => state + 1)
        }, 1000)

    }, [])




    return <>
        Hello, counter: {counter}, fake: {fake}
        <button onClick={() => setCounter(fake+1)}>fake+</button>
        <button onClick={() => setCounter(counter+1)}>+</button>
    </>
}