import React, { useState } from 'react'
import Button, { SelectButton } from './Button'
import  styles from  '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../slices/todoSlice';

function AppHeader() {

    // butona tıkladığımız zaman gelecek. 
    const [modelOpen,setModelOpen]=useState(false);
    const filterStatus = useSelector((state)=> state.todo.filterStatus)
    const dispatch = useDispatch();

    const updateFilter  =(e)=>{
      console.log("updateing select")
      dispatch(updateFilterStatus(e.target.value))
      console.log(updateFilterStatus(e.target.value))
    }
  return (
    <div className={styles.appHeader}>
        <Button  variant="primary"  onClick={()=> setModelOpen(true)}>
            Add Task
        </Button>
        <SelectButton id ="status" value={filterStatus} onChange={updateFilter}>
            <option value="all">ALL</option>
            <option value="incomplate">Incomplate</option>
            <option value="complate">Complate</option>
        </SelectButton>
        
        <TodoModal type = "add" modelOpen={modelOpen} setModelOpen={setModelOpen}  />
    </div>
  )
}

export default AppHeader