// This is an exact replica of Counter but it's a functional component
// Read through that one first

import React, {useState, useEffect} from 'react'

export default function CounterFunction(props) {

    // In functianl components useState is used to create state
    const [count, setCount] = useState(props.initialCount)

    // We can have multiple useState in funtional components
    // in classes everything has to be in this.state
    const [showType, setShowType] = useState(true)

    const handleIncrement = ()=>{
        // Whenever we update the state and the new state depends
        // on the old state, we should pass a funtion into setState
        // which gets old state as an argument and returns new state.
        // Same goes for class compoents, does not matter in this example
        // but something to remember.
        setCount((previous)=>{
            return previous +1
        })
    }

    const handleDecrement = ()=>{
        setCount((previous)=>{
            return previous - 1
        })
    }

    // useEffect with an empty dependency list (second argument) mimics the behaviour of
    // componentDidMount in class components
    useEffect(()=>{
        console.log("Counter is mounted");
    },[])


    // useEffect with no second argument mimics the behaviour of
    // componentDidUpdate in class components
    useEffect(()=>{
        console.log("Counter is updated");
    })

     // useEffect with a non-empty dependency list runs whenevr
     // one or more of its dependencies change
    useEffect(()=>{
        console.log(`Count is ${count}`);
    },[count])


    return (
        <div className="counter" >
        The current Count is {count}
        {/* Here we are rendering this span conditionally */}
      { count%2===0 && <span className="type" >(Functional)</span>}
      {/* The elemnt on the right hand side of && is only rendered 
        if the condition on the left is true*/}
        <div className="buttons">
        <button onClick={handleIncrement} className="button">Increment</button>
        <button onClick={handleDecrement} className="button">Decrement</button>
        <button onClick={()=>{setCount(props.initialCount) }} className="button">Reset</button>
        </div>
    </div>
    )
}
