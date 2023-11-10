import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    const [tipoUsuario, setTipoUsuario] = useState("cliente");

    const manejarCambioTipoUsuario = (tipo) => {
        setTipoUsuario(tipo);
    };

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Registro</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="form my-3">
                                <label htmlFor="NombreCompleto">Nombre Completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="NombreCompleto"
                                    placeholder="Ingresa tu Nombre"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Correo">Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Correo"
                                    placeholder="nombre@ejemplo.com"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Contrasena">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Contrasena"
                                    placeholder="Contraseña"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Direccion">Dirección</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Direccion"
                                    placeholder="Ingresa tu Dirección"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="CURP">CURP</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="CURP"
                                    placeholder="Ingresa tu CURP"
                                />
                            </div>
                            {tipoUsuario === "artesano" && (
                                <>
                                    <div className="form my-3">
                                        <label htmlFor="TipoArtesano">Tipo de Artesano</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="TipoArtesano"
                                            placeholder="Ingresa tu Tipo de Artesano"
                                        />
                                    </div>
                                    <div className="form my-3">
                                        <label htmlFor="Artesania">Artesanía</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Artesania"
                                            placeholder="Ingresa el tipo de Artesanía que elaboras"
                                        />
                                    </div>
                                </>
                            )}
                            <div className="my-3">
                                <p>
                                    Registrándote como:
                                    <label className="mx-2">
                                        <input
                                            type="radio"
                                            name="tipoUsuario"
                                            value="cliente"
                                            checked={tipoUsuario === "cliente"}
                                            onChange={() => manejarCambioTipoUsuario("cliente")}
                                        />
                                        Cliente
                                    </label>
                                    <label className="mx-2">
                                        <input
                                            type="radio"
                                            name="tipoUsuario"
                                            value="artesano"
                                            checked={tipoUsuario === "artesano"}
                                            onChange={() => manejarCambioTipoUsuario("artesano")}
                                        />
                                        Artesano
                                    </label>
                                </p>
                            </div>
                            <div className="my-3">
                                <p>
                                    ¿Ya tienes una cuenta?{" "}
                                    <Link to="/login" className="text-decoration-underline text-info">
                                        Inicia sesión
                                    </Link>{" "}
                                </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                    Comenzar a participar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;