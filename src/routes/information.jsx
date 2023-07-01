import { useLocation } from "react-router-dom";
import { Link, Outlet, useNavigate, useOutlet } from 'react-router-dom';
import leftArrowImage from '../assets/left-arrow-back-svgrepo-com.svg';
import '../scss/pagina1.scss'
export default function Information() {
    const { state } = useLocation();
    const { id, titulo, compañia, logo, country, city, web, aplicar, horario } = state;
    return (
        <div className="body">
            <div className="izquierda">
                <h1> <span className="title_text">Github</span> Jobs</h1>
                <h3><Link to="/"><img src={leftArrowImage} alt="" />
                    Regresar a la busqueda</Link>
                </h3>

                <h3 className="aplicar">¿Como aplicar?</h3>
                <p>Puedes envia envia un email a la empresa con la copia de tu curriculum a {web} y el link de aplicacion es {aplicar}</p>
            </div>
            <div className="derecha">
                <h1 className="titulo">{titulo} <span className="horario">{horario}</span></h1>
                <div className="empresa">
                    <img className="imagen" src={logo} alt="not found" />
                    <div className="imagen-datos">
                        <h1 className="compañia">{compañia}</h1>
                        <h1 className="ciudad">{country} {city}
                        </h1>

                    </div>

                </div>
                <p className="info">{id}</p>
            </div>
        </div>


    )
}

