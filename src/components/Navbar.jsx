import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const state = useSelector(state => state.handleCart)

    const estiloAmarillo = {
        backgroundColor: '#FFD700',
        color: '#000', // Cambia el color del texto según sea necesario
        
    };

    const estiloRosa = {
        backgroundColor: '#8C60AB',
        color: '#000', // Cambia el color del texto según sea necesario
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-1 sticky-top" style={estiloRosa}>
            <div className="container">
            <NavLink to="/" className="navbar-brand fw-bold fs-3 px-1">
                    <img src="./assets/coco-logo2.png" alt="Logo" className="logo-img" style={{ width: '80px', marginRight: '1px' }}/> COSITAS
                </NavLink>                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-1 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Top</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contacto</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-light m-2"><i className="fa fa-sign-in-alt mr-1"></i> Iniciar Sesión</NavLink>
                        <NavLink to="/register" className="btn btn-outline-light m-2"><i className="fa fa-user-plus mr-1"></i> Registrarte</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-light m-2"><i className="fa fa-cart-shopping mr-1"></i> Cositas ({state.length}) </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar