import { useState } from 'react'
export const Home = () => {
    const [usuario, setName] = useState('Usuario')
    const [user, setUser] = useState('')
    const addName = () => {
        setName(user)
    }
    const handleChange = (e) => {
        setUser(e.target.value)
    }
    return (
        <div>
            <h1>Bienvedo {usuario}</h1>
            <input type="text" onChange={handleChange} />
            <button  onClick={addName}>Cambiar nombre</button>
        </div>
    )
}