import React from 'react'

const Todos = ({todos}) => {
  const todosList = todos.length ? (
    todos.map(todo => {
      return(
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
        </div>
      )  
    })  
  ) : (
    <p className="center">You have no todos</p>
  )
  return(
    <div className="todos-collection">
      {todosList}  
    </div>
  )
}

export default Todos