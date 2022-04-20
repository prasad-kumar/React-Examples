import React from 'react';
import close from './close.png';


const ToDoList = (props) => {
    return ( 
        <>
            <li>{props.text} <img src={close} alt='close' onClick={() => {
                props.onSelect(props.index);
            }}/></li>
        </>
     );
}
 
export default ToDoList;