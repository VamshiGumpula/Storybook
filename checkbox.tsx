
import React from 'react';

export interface CheckboxProps{
    type: 'checkbox'
    // cls: string
    level: string
}

const Checkbox=({ level }: CheckboxProps)=>{
    const txt=level;
    return(
        <div className='checkboxStyle'>
            <label>{txt}</label>
            <input type='checkbox' className='inp'/>
            
        </div>
    )
}
export default Checkbox;