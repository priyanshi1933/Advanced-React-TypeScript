import React, { useCallback, useState } from 'react'
import Todos from './Todos';

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2', 'Todo 3']);

  // const addTodo = (() => {
  //   setTodos([...todos, `new Todo ${todos.length + 1}`]);
  // })

  const addTodo=useCallback(()=>{
    setTodos([...todos,`new Todo ${todos.length+1}`]);
  },[todos])

  return (
    <div>
      <h1>Optimize re-render with the help of useCallback and memo</h1>
      <hr/>
      <h2>Count:{count}</h2>
      <button className='btn btn-primary' onClick={() => setCount(count + 1)}>+1</button>
      <Todos todos={todos} onAddTodo={addTodo} />
    </div>
  )
}
