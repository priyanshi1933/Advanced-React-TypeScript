import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useToggle } from './components/useToggle'
import Counter from './components/Counter'
import UserList from './components/UserList'
import UseMemoEx from './components/UseMemoEx'
import UseCallback from './components/UseCallback'


function App() {
  const [toggleOn, updateToggle] = useToggle();

  return (
    <>
    <div className='App'>
      {/* <h1>Use of useState</h1>
      <button className='btn btn-success btn-lg' onClick={updateToggle}>
        {toggleOn?"ON":"OFF"}
      </button> */}
      {/* <Counter/> */}
      {/* <UserList/> */}
      {/* <UseMemoEx/> */}
      <UseCallback/>
    </div>
    </>
  )
}

export default App
