
import React from 'react';

export interface selectProps{
    type: 'text'
    // cls: string
    level: string
}

const S=({ level }: selectProps)=>{
    const txt=level;
    return(
        <div className='selectStyle'>
            <select name="Subjects" id="subs">
                <option value="S">Science</option>
                <option value="H">History</option>
                <option value="E">Economics</option>
                <option value="HN">Helath&Nutrition</option>
            </select>
            {/* <label>{txt}</label> */}
        </div>
    )
}
export default S;