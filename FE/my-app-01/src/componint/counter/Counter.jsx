import {func, PropTypes} from 'prop-types'
import { useState } from 'react'
import './Counter.css'

export default function Counter(){
    return(
        <>
        <CounterButton by={1}/>
        <CounterButton by={2}/>
        </>
    )
}

function CounterButton({by}){

    const [count, setCount] = useState(0);

    console.log(by);

    function incrementCounterFun(){
        setCount(count + by)
        console.log(count)
    }

    function decrementCounterFun(){
        setCount(count - by)
        console.log(count)
    }

    function incrementBy5(){
        setCount(count + 5)
        console.log(count)
    }

    function decrementBy5(){
        setCount(count - 5)
        console.log(count)
    }

    return(
        <div className="CounterButton">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" onClick={incrementCounterFun}>+{by}</button>
                <button className="counterButton" onClick={decrementCounterFun}>-{by}</button>
                <div>
                    <button className="counterButton" onClick={incrementBy5}>+5</button>
                    <button className="counterButton" onClick={decrementBy5}>-5</button>
                </div>
            </div>
        </div>
    )
}

CounterButton.defaultProps= {
    by: 1
}