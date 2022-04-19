import React, { useState } from 'react';


const Clock = () => {

    const initialTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(initialTime);

    const updateTime = () => {
        const currTime = new Date().toLocaleTimeString();
        setTime(currTime);
    }
    setInterval(updateTime, 1000);

    return ( 
        <div className='container'>
            <h1>{time}s</h1>
        </div>
     );
}
 
export default Clock;