import React from 'react'
import { useReducer } from 'react'
const initialState={count:0};
type ACTIONTYPE=
    | {type:"increment";payload:number}
    | {type:"decrement";payload:string};

function reducer(state:typeof initialState,action:ACTIONTYPE){
    switch(action.type){
        case "increment":
            return {count:state.count+action.payload};
        case "decrement":
            return {count:state.count-Number(action.payload)};
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <>
    <h1>Counter App with useReducer</h1>
    <button className='btn btn-dark btn-lg' onClick={()=>dispatch({type:"decrement",payload:"5"})}>-</button>
    Count: {state.count}
    <button className='btn btn-dark btn-lg' onClick={()=>dispatch({type:"increment",payload:5})}>+</button>
    </>
  )
}

export default Counter