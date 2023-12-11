import {useState} from "react";

export function Counter2(){
    const [count2,setCount2] = useState(0);
    const increase2 = () => {
        setCount2(prevState => prevState + 2);
    }
    return(
        <>
            <p>Count: {count2}</p>
            <button onClick={increase2}>Add 2</button>
        </>
    )
}