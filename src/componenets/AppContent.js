import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import styles from '../styles/modules/app.module.scss'

function AppContent() {
  const todoList = useSelector((state)=> state.todo.todoList);
     console.log(todoList);
     const filterStatus = useSelector((state)=> state.todo.filterStatus)

    


    // todo'ları tarihe göre sıralamak için 
    const sortedTodoList =[...todoList];
    sortedTodoList.sort((a,b)=>new Date(b.time)- new Date(a.time));


    const filteredTodoList = sortedTodoList.filter(item => {
      console.log(item)
      if(filterStatus === 'all'){
        return true
      }
      return item.status === filterStatus;
    })

    // elimzde bir todoList varsa ve bunlar lenght'i 0 dan büyükse gösteriyoruz 
     return <div className={styles.content__wrapper}>
      {filteredTodoList && filteredTodoList.length>0
        ?  filteredTodoList.map((todo)=> <TodoItem key={todo.id} todo={todo} />) 
        : 'no to list for todoList'
      }
      
     </div>
  
}

export default AppContent