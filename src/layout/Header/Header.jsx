import { ItemNavbar } from "../../componest/ItemNavbar/ItemNavbar"
import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <h1>Consumo de Api's</h1>
            <nav className="navbar">
                <ul>
                    <ItemNavbar route="/" content='Rick And Morty' style='link'/>
                    <ItemNavbar route="/Cats" content='Rick And Morty' style='link'/>
                    <ItemNavbar route="/Gifs" content='Rick And Morty' style='link'/>
                </ul>
            </nav>
        </header>
    )
}