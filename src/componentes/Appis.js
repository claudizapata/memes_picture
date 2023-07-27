/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos/Imgestilo.css";
import axios from "axios";
import React, {useState, useEffect} from "react";

import html2canvas from 'html2canvas';

import Pie from './Footer';
import Encabeza from './Encabeza';



const Appis = () =>{
    const [imgMeme, setImgMeme ] = useState('https://reqres.in/img/faces/2-image.jpg');
    const [textomeme, setTextomeme] = useState('');//en textomeme guarda el texto del input
    const [textmemeabajo, setTextomemeabajo] = useState('');
    
    const [data, setData] = useState([]); //la variable de estado y la función encargada de manipular esa variable
    
    const getMemes = async  () => {
      const peticion = await axios.get('https://reqres.in/api/users/')
      setData(peticion.data.data)
      
  }
    
  
    useEffect(()=>{/*esta es la función para la eptición a la appi*/
        getMemes()
    },[]);
    //esta funcion se encarga de hacer todo el sincronismo con la pagina
    //traerme los datos de esta url
   

    const textArriba = (e) =>{//para recibir el evento
      setTextomeme(e.target.value);//Así llego al dato del input escrito x el ususario
     }
    const textoAbajo = (e)=>{
      setTextomemeabajo(e.target.value);
    }

    const seleccionarImg = (e) =>{
      setImgMeme(e.target.value);//recolecta el valor de la imagen que el usuario elija
    }
  
    const imgDown =(e)=>{
      //esto es para exportar archivos
      html2canvas(document.getElementById('descargar'),{allowTaint:true,useCORS:true}).then(function(canvas){
              const img = canvas.toDataURL('./jpg')//apunta a la ruta donde está el archivo
              const link = document.createElement('a')//creamos una etiqueta, un elemento descargable 
              link.download ='imagen_meme.jpg'//siempre va a descargar con este nombre
              //asignamos la imagen
              link.href = img;//le decimos de donde va a descargar pasándole "img"
              link.click();//forzamos el click
          })
          setImgMeme('https://reqres.in/img/faces/2-image.jpg');
          setTextomeme("");
          setTextomemeabajo("");
          
      };
     
    
      
//value={character.avatar}
  
    return(
      <>
      <section>
    <Encabeza/>
      </section>
    <div className='container'>
        <div>
          <h2>MEMES PICTURE</h2>
          
          <h2 className='titulo'>Elegí una imagen y creá tu MEME</h2>
          
        </div>
        <div className='inputs'>
              <div className="arriba">
                  <h3>Arriba del Meme</h3>
                  <input onChange={textArriba} className='ingresa-texto' type='text' placeholder='Escribí tu texto...' name='texto' maxLength={40} />
                  <p className="guia">(Hasta 40 caracteres)</p>
              </div>
              
              <div className="abajo">
                  <h3>Abajo del Meme</h3>
                  <input onChange={textoAbajo} className='ingresa-texto' type='text' placeholder='Escribí tu texto...' name='textoAbajo' maxLength={40} />
                  <p className="guia">(Hasta 40 caracteres)</p>
              </div>

        </div>
      
                {/*card bg-dark text-white*/}
             <div className="card1" >
                <div className='seleccionar'>
       
                      <select onChange={seleccionarImg} className='form-select' value={imgMeme}>
                            {data.map((character) =>{
                              return ( //item es la variable que recorre el array
                                <option key={character.id} value={character.avatar} >
                                {character.first_name}{' '}{character.last_name} </option>
                                ); //genera este li para cada meme, agregamos un KEY porque es una lista
                            })};
                      </select>
                </div>

                  <div className="container_down">
                       <figure className='text-center' id='descargar'>{/*'descargar es el contenedor donde está el elemento a exportar' 
                            ponemos las dos cosas que con  */}
                            <p className='mt-5 h1 text-center estilo'>{textomeme}</p>
                            <img id="imagen" src={imgMeme} alt="imagen" />
                            <p className='mt-5 h1 text-center estilo estilo2'>{textmemeabajo}</p>
                        </figure>
                
      
          
            
                      <button onClick={imgDown} className="boton">Descargar</button>
                  </div>
             </div>
      </div>

      <section>
        <Pie/>
      </section>
        
    </>
    );

};

export default Appis;