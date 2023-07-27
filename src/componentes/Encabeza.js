
import "./estilos/Imgestilo.css";
import descargaMenor from "./estilos/descargaMenor.jpg"



const Encabeza = ()=>{


    return(


        
        <div className="pie-container">
            
            <img src={descargaMenor} alt="meme" className="imagen-meme"/>
            <span className="material-symbols-outlined">menu</span>
    
        </div>
            


    )
}
export default Encabeza;