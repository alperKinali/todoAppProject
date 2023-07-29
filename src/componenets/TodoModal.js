import React, { useEffect, useState } from "react";
import styles from "../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";
import { addTodo, updateTodo } from "../slices/todoSlice";
import  toast from 'react-hot-toast'

import {useDispatch} from  'react-redux';

import {v4 as uuid} from 'uuid';

function TodoModal(props) {
    console.log(props)
    
    
    const[title,setTitle]=useState('');
    const[status,setStatus]=useState('incomplate');
    



    useEffect(()=>{
      if(props.type === 'update' && props.todo){
        setTitle(props.todo.title);
        setStatus(props.todo.status);
      }
      else{
        setTitle('')
        setStatus('incomplate')
      }
      // bu ueseftin çalışması için props.type'ın değişmes , props.todo değişmesi gerekiyor 
    }, [props.type, props.todo , props.modelOpen])

    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(title === ''){
          toast.error('title gir !')
          return;
        }
        console.log({title, status})
        if(title && status){
          if(props.type === 'add' ){
            dispatch(addTodo({
              id:uuid(),
              title,
              status,
              time : new Date().toLocaleString(),
            })
            );
            toast.success('Task Başarılı bir şekilde Eklendi.')
           
          }
          if(props.type === 'update' && props.type !=='add'){
            console.log('updating task')
            if(props.todo.title !== title || props.todo.status  !== status){
              dispatch(
                updateTodo({
                  ...props.todo,
                  title,
                  status,
                })
              )
            }
          }       
          else{
            toast.error('no chancing to update ')
          }  
          
        }
        
        props.setModelOpen(false);

        
    }
  return (
    // task eklerki açılacak modal kısmı.
    <>
      {props.modelOpen && (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.closeButton} onClick={()=>props.setModelOpen(false)}
           
            tabIndex={0}
            role="button"
            >
              <MdOutlineClose />
            </div>
            <form className={styles.form} onSubmit={(e)=>handleSubmit(e)}>
              <h1 className={styles.formTitle}>{props.type === 'update' ? 'Update' :' Add'} Task</h1>
              <label htmlFor="title">
                Task
                <input type="text" id="title"  value={title} 
                onChange={(e)=> setTitle(e.target.value)}
                
                />
              </label>
              <label htmlFor="status">
                Status
                <select name="status" id="status" value={status} onChange={(e)=>setStatus(e.target.value)}>
                  <option value="incomplate">incomplate</option>

                  <option value="complate">complate</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  {props.type === 'update' ? 'Update': 'Add'} Task
                </Button>
                <Button type="button" variant="secondary" 
                onClick={()=>props.setModelOpen(false)}
                onKeyDown={()=>props.setModelOpen(false)}
                
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoModal;
