import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/socios.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Socios = () => {
  const socios = [
    { id: 1, nombre: "ArtYamii", imagen: "https://scontent.fmex26-1.fna.fbcdn.net/v/t39.30808-6/391605144_651713973765708_620498365004224916_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=6rCyZ5_QoHYAX-QGaOc&_nc_oc=AQmDYpsfYGN6-qY5jdHOvgRqx2UfUh-5-VbRGdFiYn-ZbBTXtmeQbOKeP66LvGxOtxw&_nc_ht=scontent.fmex26-1.fna&oh=00_AfBV8D8jrbbHWH7vFcmrfxLCG93ybmUXqpIa4kcqmHxTXg&oe=6574BAA9", url: 'https://www.facebook.com/profile.php?id=100067813326305' },
    { id: 2, nombre: "Artesanias Tantoyuca", imagen: "https://scontent.fmex36-1.fna.fbcdn.net/v/t39.30808-6/306795458_471395611669354_1804839081664738759_n.png?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=cw55dehHgqkAX90BqQg&_nc_ht=scontent.fmex36-1.fna&oh=00_AfBDgFFKBNcqUWsgp-PyWl52zBokQ_A3Al8H8BA87ciOoA&oe=65744A79", url:'https://www.facebook.com/ArtesaniasTNY' },
    { id: 3, nombre: "Na Lancha", imagen: "https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-6/240794526_3561163767319312_6482077449468025159_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFf1jyJlFLuRPCNp9nWbI64GSdjYrrV8dcZJ2NiutXx1_MvhGBHyyXSzuIN0Tc3i0lrkThoa_Ofivw0YTJT6bUP&_nc_ohc=sBQ3q9Hlr1AAX_ksvzZ&_nc_pt=1&_nc_ht=scontent.fmex28-1.fna&oh=00_AfB9EcUEykTEuTOBHxrwsf-anlwTM99Qu8SZ3XG0FEYdSQ&oe=65736685", url:'https://www.facebook.com/Nalancha' },
    
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: <FaArrowLeft />,
    nextArrow: <FaArrowRight />,
    responsive: [
      {
        breakpoint: 768, // ajustar según tus necesidades
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576, // ajustar según tus necesidades
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const abrirURL = (url) => {
    window.open(url, "_blank");
  };


  return (
    <div className="container my-3 py-3">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Nuestros Socios</h2>
          <hr />
          <Slider {...settings}>
            {socios.map((socio) => (
              <div
                key={socio.id}
                className="card mx-2"
                onClick={() => abrirURL(socio.url)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={socio.imagen}
                  className="card-img-top"
                  alt={`Imagen de ${socio.nombre}`}
                />
                <div className="card-body">
                  <h5 className="card-title">{socio.nombre}</h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Socios;
