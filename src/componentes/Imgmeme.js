/* eslint-disable jsx-a11y/alt-text */
import html2canvas from "html2canvas";
import "./estilos/Imgestilo.css";
import React, { useState } from 'react';

const Imgmeme = () =>{//el componente se guarda como si fuera una variable
    //almacenamos el cambio del onChange
    const [textomeme, setTextomeme] = useState();//en textomeme guarda el texto del input
    const [textmemeabajo, setTextomemeabajo] = useState();
    const [imgmeme, setImgmeme] = useState();//en imgmeme guarda el valor del value de la imagen
    

    const textArriba = (e) =>{//para recibir el evento
        setTextomeme(e.target.value);//Así llego al dato del input escrito x el ususario
        console.log(e.target.value);
    }

    const textoAbajo = (e)=>{
        setTextomemeabajo(e.target.value);
    }

    const seleccionarImg = (e) =>{
        setImgmeme(e.target.value);//recolecta el valor de la imagen que el usuario elija
    }

   /* html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);
    });*/
const imgDown =(e)=>{//esto es para exportar archivos
        html2canvas(document.getElementById('exportar')).then(function(canvas){
                let img = canvas.toDataURL("memesImg/png");//apunta a la ruta donde está el archivo
                let link = document.createElement("a");//creamos una etiqueta, un elemento descargable 
                link.download ='NombreImagen.png';//siempre va a descargar con este nombre
                //asignamos la imagen
                link.href =  img;//le decimos de donde va a descargar pasándole "img"
                link.click(); //forzamos el click
                
                
            })

        };
    return(//esto es lo que sale x pantalla
        <div>
             <h1>Editá tu propio meme</h1>
            
            <h2 className='mt-2 mb-3 titulo2' >Elegí la imagen de tu meme</h2>           
             <select onChange={seleccionarImg} className="" aria-label="Default select example">
                <option selected></option>
                <option  value={`gallito`}>Gallito</option>
                <option  value={`hombre-arana`}>Hombre Araña</option>
                <option  value={`gallito`}>Jirafa</option>
                <option  value={`palmera`}>Palmera</option>
                <option  value={`pluto`}>Pluto</option>
            </select>
            
             <div className="arriba">
                <h2 >Escribí tu texto arriba</h2>
                <input onChange={textArriba} className='' type='text' placeholder='' name='meme' maxLength={40}/>
                <p className="guia">{`(Hasta 40 caracteres)`}</p>
             </div>
             
            <div className="abajo">
                <h2>Escribí tu texto abajo</h2>
                <input onChange={textoAbajo} className='' type='text' name='memeabajo' maxLength={40}/>
                <p className="guia">{`(Hasta 40 caracteres)`}</p>
            </div>
            <div className="container_down">
                <div>
                    <figure className='text-center' id='exportar'>{/*'exportar es el contenedor donde está el elemento a exportar' */}
                       <div>
                        <p className='mt-5 h1 text-center estilo'>{textomeme}</p>
                        <img id="imagen" src={`./memesImg/${imgmeme}.png`} alt="imagen" />{/*si la imagen viene de una API, se configura esto, para que lo reciba */}               
                        <p className='mt-5 h1 text-center estilo estilo2'>{textmemeabajo}</p>
                       </div>
                        
                    </figure>
                </div>
                <div>
                    <button onClick={imgDown} className="boton">Descargar</button>
                </div>
            </div>
          </div>       
    );
    
};
export default Imgmeme;