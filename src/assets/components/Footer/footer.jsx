import React from "react"
import './footer.css'



const Footer=()=>{
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Te ayudamos</h4>
                        <a href="/Empleados">
                            <p>Venta telefonica 600-555-44-33</p>
                        </a>
                        <a href="/Empleados">
                            <p>Contactanos</p>
                        </a>
                        <a href="/Empleados">
                            <p>Centro de ayuda</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Recursos</h4>
                        <a href="/Empleados">
                            <p>1</p>
                        </a>
                        <a href="/Empleados">
                            <p>2</p>
                        </a>
                        <a href="/Empleados">
                            <p>3</p>
                        </a>
                        <a href="/Empleados">
                            <p>4</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Patrocinadores</h4>
                        <a href="/Empleados">
                            <p>1</p>
                        </a>
                        <a href="/Empleados">
                            <p>2</p>
                        </a>
                        <a href="/Empleados">
                            <p>3</p>
                        </a>
                        <a href="/Empleados">
                            <p>4</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <div className="sb__footer-links_div">
                            <h4>Pronto abierto</h4>
                            <a href="/Empleados">
                                <p>Devoluciones</p>
                            </a>
                            <a href="/Empleados">
                                <p>Ofertas</p>
                            </a>
                            <a href="/Empleados">
                                <p>Nose</p>
                            </a>
                            <a href="/Empleados">
                                <p>Empanadas</p>
                            </a>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyrigth">
                        <p>
                            @{new Date().getFullYear()} Codigo int. Todos los derechos reservados
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms">
                            <div><p>Terminos y condiciones</p></div>
                        </a>
                        <a href="/Privacidad">
                            <div><p>Privacidad</p></div>
                        </a>
                        <a href="/Seguridad">
                            <div><p>seguridad</p></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer