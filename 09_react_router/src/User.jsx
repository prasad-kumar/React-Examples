import React from 'react';
import { useParams } from 'react-router-dom';


const User = () => {
    const {name, age} = useParams();

    return ( 
        <>
        <h1>My name is {name} i am {age} years old. </h1>
        </>
     );
}
 
export default User;