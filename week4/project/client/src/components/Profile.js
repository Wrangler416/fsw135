import React, {useContext} from 'react'
import {UserContext} from "../context/UserProvider"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import Todo from "./Todo"


export default function Profile(){
  const {user: {username}, addTodo, todos } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add Todo</h3>
      <TodoForm addTodo={addTodo} /> 
      <h3>Your Todos</h3>
      <TodoList todos={todos} /> 
    </div>
  )
}

