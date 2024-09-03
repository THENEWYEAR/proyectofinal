import React from "react"
import './navbar.css'

const Navbar = () => {
    return (
        <header className="header">
            <a href="/" className="logo">logo</a>

            <nav className="navbar">
                <a href="/">Inicio</a>
                <a href="/">Información</a>
                <a href="/">Portafolio</a>
                <a href="/">Servicios</a>
                <a href="/">Contactos</a>

            </nav>
        </header>
    )
}

export default Navbar