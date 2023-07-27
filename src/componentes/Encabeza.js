
import "./estilos/Imgestilo.css";
import descarga from "./estilos/descarga.jpg";



const Encabeza = ()=>{


    return(


        
        <div className="pie-container">
            
            <img src={descarga} alt="meme" className="imagen-meme"/>
            <span className="material-symbols-outlined">menu</span>
    
        </div>
            


    )
}
export default Encabeza;