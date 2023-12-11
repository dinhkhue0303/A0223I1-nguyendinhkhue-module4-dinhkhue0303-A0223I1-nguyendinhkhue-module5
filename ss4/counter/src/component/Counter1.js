import {useState} from "react";

export function Counter1(){
    const [count,setCount] = useState(0);
    const increase = () => {
        setCount(prevState => prevState + 1 );
    }
    return (
        <>
            <p>Count: {count}</p>
            <button onClick={increase}>Add 1</button>
        </>
    )
}