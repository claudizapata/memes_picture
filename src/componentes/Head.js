import "./estilos/Imgestilo.css";
import descarga from "./estilos/descarga.jpg";

const Header =() => {

    return(

        
        <div className="collapse navbar-collapse"id="navBarNav">
            <img src={descarga} alt="meme" id="imagen-meme"/>
            <nav className="navbar">
                

            </nav>
            


        </div>
    )

};

export default Header;