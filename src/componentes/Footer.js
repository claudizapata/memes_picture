
import "./estilos/Imgestilo.css";
import FacebookIcon from '@mui/icons-material/Facebook';

import InstagramIcon from '@mui/icons-material/Instagram';


const Pie = ()=>{


    return(


        
        <div className="pie-container">
            <p className="parrafo-pie">Desarrollado por:   Claudia Roxana Zapata - 2023</p>
            <div className="lista-ul">
                <a href='https://facebook.com/' target='blank' className='nav-link px-2 text-violet' style={{ color: "white" }}><FacebookIcon /></a>
                
                <a href='https://instagram.com/' target='blank' className='nav-link px-2 text-violet'style={{ color: "white" }}><InstagramIcon /></a>

            </div>
            

        </div>
    )
}
export default Pie;