import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/not_found.json"; // Reemplaza con la ruta correcta de tu archivo JSON

const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-5 d-flex align-items-center justify-content-center">
        <div className="col-md-8 py-5 bg-gray text-center">
          <h4 className="p-3 display-5">Nos perdimos</h4>

          {/* Agrega la animación Lottie */}
          <Lottie animationData={animationData} />

          <Link to="/" className="btn btn-outline-dark mx-4">
            <i className="fa fa-arrow-left"></i> Regresar
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
