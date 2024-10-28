import React from 'react'
import TodoCard from './TodoCard'
import wizflying from '../assets/WizardFlying.gif'

export default function TodoList(props) {
    const {todos }=props
    return (
    <ul className='main'>
        <h2 className='mainHeader'>Objectives</h2>
        {todos.map((todo, todoIndex)=>{
            return(
                <TodoCard {...props} index={todoIndex} key={todoIndex}>
                   <img className='wizflying' src={wizflying} alt="" /> <p> {todo}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}
