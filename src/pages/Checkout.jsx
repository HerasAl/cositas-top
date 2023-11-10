import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No tienes cositos en tus cositas</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Seguir viendo
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Tu Orden</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Productos ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Apoyo Artesanal
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Costo Total</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Dirección de Pago</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" novalidate>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label for="firstName" className="form-label">
                          Nombre(s)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Nombre(s) Requerido
                        </div>
                      </div>

                      <div className="col-sm-6 my-1">
                        <label for="lastName" className="form-label">
                          Apellido(s)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Apellido(s) Requerido
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="email" className="form-label">
                          Correo
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="correo@ejemplo.com"
                          required
                        />
                        <div className="invalid-feedback">
                          Por favor ingresa un correo valido
                        </div>
                      </div>

                      <div className="col-12 my-1">
                        <label for="address" className="form-label">
                          Dirección
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          placeholder="1234 Calle Cedro"
                          required
                        />
                        <div className="invalid-feedback">
                          Infresa Dirección de pago
                        </div>
                      </div>

                      <div className="col-12">
                        <label for="address2" className="form-label">
                          Dirección 2{" "}
                          <span className="text-muted">(Opcional)</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address2"
                          placeholder="Número o Manzana"
                        />
                      </div>

                      <div className="col-md-5 my-1">
                        <label for="country" className="form-label">
                          País
                        </label>
                        <br />
                        <select className="form-select" id="country" required>
                          <option value="">Elegir...</option>
                          <option>México</option>
                        </select>
                        <div className="invalid-feedback">
                          Selecciona País
                        </div>
                      </div>

                      <div className="col-md-4 my-1">
                        <label for="state" className="form-label">
                          Estado
                        </label>
                        <br />
                        <select className="form-select" id="state" required>
                          <option value="">Elegir...</option>
                          <option value="cdmx">CDMX</option>
                          <option value="ags">Aguascalientes</option>
                          <option value="bc">Baja California</option>
                          <option value="bcs">Baja California Sur</option>
                          <option value="camp">Campeche</option>
                          <option value="chis">Chiapas</option>
                          <option value="chih">Chihuahua</option>
                          <option value="coah">Coahuila</option>
                          <option value="col">Colima</option>
                          <option value="dgo">Durango</option>
                          <option value="gto">Guanajuato</option>
                          <option value="gro">Guerrero</option>
                          <option value="hgo">Hidalgo</option>
                          <option value="jal">Jalisco</option>
                          <option value="mex">México</option>
                          <option value="Mich">Michoacán</option>
                          <option value="mor">Morelos</option>
                          <option value="nay">Nayarit</option>
                          <option value="nl">Nuevo León</option>
                          <option value="oax">Oaxaca</option>
                          <option value="pue">Puebla</option>
                          <option value="qro">Querétaro</option>
                          <option value="qroo">Quintana Roo</option>
                          <option value="slp">San Luis Potosí</option>
                          <option value="sin">Sinaloa</option>
                          <option value="son">Sonora</option>
                          <option value="tab">Tabasco</option>
                          <option value="tamps">Tamaulipas</option>
                          <option value="tlax">Tlaxcala</option>
                          <option value="ver">Veracruz</option>
                          <option value="yuc">Yucatán</option>
                          <option value="zac">Zacatecas</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>

                      <div className="col-md-3 my-1">
                        <label for="zip" className="form-label">
                          CP
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="zip"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Se requiere codigo postal
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <h4 className="mb-3">Pago</h4>

                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label">
                          Nombre de la tarjeta
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-name"
                          placeholder=""
                          required
                        />
                        <small className="text-muted">
                          Nombre de a quien pertenece la tarjeta
                        </small>
                        <div className="invalid-feedback">
                          Nombre de tarjeta requerido
                        </div>
                      </div>

                      <div className="col-md-6">
                        <label for="cc-number" className="form-label">
                          Número de tarjeta
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-number"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Número de tarjeta Requerido
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">
                          Expiración
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Expiración requerida
                        </div>
                      </div>

                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">
                          CVV
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          placeholder=""
                          required
                        />
                        <div className="invalid-feedback">
                          Código requerido
                        </div>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <button
                      className="w-100 btn btn-primary "
                      type="submit" disabled
                    >
                      Obtener cositos ahora
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
