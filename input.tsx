
import React from 'react';

export interface InputProps{
    type: 'text'
    // cls: string
    level: string
}

const In=({ level }: InputProps)=>{
    const txt=level;
    return(
        <div className='inputStyle'>
            <input type='text' className='inp' placeholder='Enter your input'/>
            {/* <label>{txt}</label> */}
        </div>
    )
}
export default In;