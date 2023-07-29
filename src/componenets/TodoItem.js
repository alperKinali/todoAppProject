import React, { useEffect } from "react";
import styles from "../styles/modules/todoItem.module.scss";
import { getClasses } from "../utils/getClasses";
import { format } from "date-fns/esm";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import { toast } from "react-hot-toast";
import TodoModal from "./TodoModal";
import { useState } from "react";
import CheckButton from "./CheckButton";

function TodoItem({ todo }) {
    const dispatch = useDispatch();


    const [checked,setChecked]=useState(false);
    const [updateModelOpen, setUpdateModelOpen] = useState(false);

    useEffect(()=>{
      if(todo.status === 'complate'){
        setChecked(true)
      }
      else{
        setChecked(false)
      }
    },[todo.status])





  const handleDelete = () => {
    console.log("deleted");
    dispatch(deleteTodo(todo.id))
    toast.success('todo Deleted Successfuly')
  };

  const handleUpdate = () => {
    console.log("updated");
    setUpdateModelOpen(true)
  };

  const handleCheck=()=>{

    setChecked(!checked)
    //  ne ise tersinialıp getirmek için 
    dispatch(
      updateTodo({
        ...todo,
        status :checked? 'incomplate' :'complate'

      })
    )
  }

  return (
    <>
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        <CheckButton checked={checked} handleCheck={handleCheck}/>
        <div className={styles.text}>
          <p
            className={getClasses([
              styles.todoText,
              todo.status === "complate" && styles["todoText--completed"],
            ])}
          >
            {todo.title}
          </p>
          <p className={styles.time}>{todo.time}</p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <div
          className={styles.icon}
          onClick={handleDelete}
          onKeyDown={handleDelete}
          role="button"
          tabIndex={0}
        >
          <MdDelete />
        </div>
        <div
          className={styles.icon}
          onClick={handleUpdate}
          onKeyDown={handleUpdate}
          role="button"
          tabIndex={0}
        >
          <MdEdit />
        </div>
      </div>
    </div>
    <TodoModal
    type ="update"
    todo ={todo}
     modelOpen ={updateModelOpen}  
     setModelOpen={setUpdateModelOpen}/>
    </>
    
  );
}

export default TodoItem;
