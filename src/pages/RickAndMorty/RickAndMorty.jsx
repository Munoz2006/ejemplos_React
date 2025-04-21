import { useEffect,useState } from "react"
import { Card } from "../../componest/Card/Card"
import './RickAndMorty.css'

const URL = 'https://rickandmortyapi.com/api/character'

export const RickAndMorty = () =>{

    const [characters, setCharacters] = useState([])
    
    const handleGetCharacters = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setCharacters(data.results)
      }
      
    useEffect(() => {
        handleGetCharacters()
    })      
      return (
        <>    
          <section className="cards">
            {
              characters.map(character => (
                <Card key={character.id} {...character} />
              ))
            }
          </section>
        </>
      )
}
