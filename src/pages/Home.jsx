import { useState } from 'react'
export const Home = () => {
   const [color, setColor] = useState('#fff')
   
   const changeColor = () => {
       setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    }       
    return (
        <>
        <div className="container" style={{backgroundColor: color}}>
            <h1>{color}</h1>
        </div>
        <button onClick={changeColor}>Change Color</button>
        </>
        
    )
}