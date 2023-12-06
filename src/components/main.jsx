import React from "react";
import "../styles/main_style.css"; // Ruta al archivo CSS


const Home = () => {
  return (
    <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 mx-0 position-relative">
        <img
          className="card-img img-fluid w-100 object-fit-cover"
          src="./assets/main_nun.jpg"
          alt="Card"
        />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="container text-center text-white">
            <h1 className="card-text fs-5">
              El proyecto no solo ha sido una oportunidad para impulsar la
              economía de los artesanos, sino también un recordatorio constante
              de la importancia de preservar las tradiciones culturales y
              celebrar la creatividad humana.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
