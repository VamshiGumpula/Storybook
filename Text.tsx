
import React from 'react';

export interface TextProps{
    type: 'text'
    // cls: string
    level: string
}

const T=({ level }: TextProps)=>{
    const txt=level;
    return(
        <div className='textStyle'>
            {/* <input type='text' className='inp' placeholder='Enter your input'/> */}
            <label>{txt}</label>
        </div>
    )
}
export default T;