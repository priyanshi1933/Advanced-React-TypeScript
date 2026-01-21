import React, { memo } from 'react'
type PropsType={
    todos:string[];
    onAddTodo:()=>void;
}

function Todos({todos,onAddTodo}:PropsType) {
    console.log("todos component is being re-rendered...")
  return (
    <div>
        <ul>
            {
                todos.map((todo,index)=>
                    <li key={index}>{todo}</li>
                )
            }
        </ul>
        <button className='btn btn-dark' onClick={onAddTodo}>Add New Todo</button>
    </div>
  )
}
export default memo(Todos);
