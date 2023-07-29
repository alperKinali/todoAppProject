import React, { useEffect } from "react";
import styles from "../styles/modules/todoItem.module.scss";
import {motion} from 'framer-motion';

function CheckButton(props) {
    useEffect(()=>{
        console.log(props)
    })

    const checkVariants ={
        initial:{
            color:'#ffff',
        
        },
        checked :{
            pathLength:1,
        },
        unchecked:{
            pathLength:0
        },
    };

    // checkBoxun dış kısmı için  
    const boxVariant ={
        
        checked :{
            background:'var(--primaryPurple)',
            transition : {duration:0.1},
            
        },
        unchecked:{
            background:'var(--gray-1)',
            transition: {duration:0.1}
        },
    };
  return (
    
    <motion.div 
    className={styles.svgBox}
    animate={props.checked ? 'checked':'unchecked'}
    onClick={()=>{
        props.handleCheck();

       }
       
    }
    variants={boxVariant}
    
    >
      <motion.svg
        className={styles.svg}
        color = "red"
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
            variants={checkVariants}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

export default CheckButton;
