import { Menu, NavBar, Titulo } from "./styled"

const PokedexCorpo = () => {
    return (
        <NavBar>
            <Titulo>Nacional Dex</Titulo>
            <Menu>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Regioes</a></li>
                </ul>
            </Menu>
        </NavBar>
    )
}

export default PokedexCorpo