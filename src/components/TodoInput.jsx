import React, { useState } from 'react'
import '../index.css'
import gifImage from '../assets/wizard.gif';
export default function TodoInput(props) {
  const {handleAddTodos, todoValue, setTodoValue}=props
    return (
  <>
  <header>
      <input value={todoValue} onChange={(e)=>{
        setTodoValue(e.target.value)
      }} placeholder='Enter Todo...' type="text" />
      <button onClick={()=>{
        handleAddTodos(todoValue)
        setTodoValue('')
      }}
      >Add</button>
      
    </header>
    <div className='moto'>
    <div>
        <img src={gifImage} className='wizard' alt="" />
    </div>
    <h1>Life is <span className='motoGame'>game</span>, Become a <span className="motoPro">pro</span> to get ahead of everyone !</h1>
  </div>
  </>
  )
}
