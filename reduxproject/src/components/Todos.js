import React from 'react'
import {  useSelector } from 'react-redux'
function Todos() {
  const todos =  useSelector(state=>state.todos);
 console.log(todos)
  return (
    <>    
    <h1>Todos List</h1>
    <div>
    
    {todos.map((todo)=>(
      <div className='flex-row' key={todo.id}>{todo.text}
      <button className="
      focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Del</button>
      </div>
    ))}
    
    </div>
    </>

  )
}

export default Todos