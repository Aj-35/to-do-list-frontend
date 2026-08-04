import React, { useState } from 'react'
import './Task.css'
const Task = () => {

    const [color,setColor] = useState('')
    const [isDarkText,setDarkText] = useState('')


  return (
    <div>
        <div className='colorBox' style={{backgroundColor : color}}>
            <p className='textColor' style={{color : isDarkText ? 'white' : 'black'}}>{color}</p>
        </div>
        <input 
        type="text" 
        placeholder='Type Color'
        value={color}
        onChange={(e) => setColor(e.target.value)}

        />
        <button onClick={() => setDarkText(!isDarkText)}>Toggle Text Color</button>
    </div>
  )
}

export default Task