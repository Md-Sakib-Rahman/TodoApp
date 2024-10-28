import React, { Children } from 'react'
import wizflying from '../assets/WizardFlying.gif'

export default function TodoCaed(props) {
  const {children, handleDeleteTodos, index , handleEditTodo} = props
  return (
    <div>
                
                 <li className='todoItem' >
                 {children}
                    <div className='actionsContainer'>
                      <button onClick={()=>{
                        handleEditTodo(index)
                      }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                      
                      </button>
                      <button onClick={()=>{
                        handleDeleteTodos(index)
                      }}>
                      <i className="fa-regular fa-trash-can"></i>
                     
                      </button>
                    </div>
                </li>
    </div>
  )
}
