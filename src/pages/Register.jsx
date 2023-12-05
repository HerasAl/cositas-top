import React, { useState, useEffect } from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/gracias.json"; // Reemplaza con la ruta correcta de tu archivo JSON

var debug = true;
var server="";

if(debug){
   server = 'http://localhost:3001';
}else{
    server = '/server/data'
}

const Register = () => {

  const [tipoUsuario, setTipoUsuario] = useState("cliente");
  const [municipios, setMunicipios] = useState([]);
  const [mostrarAnimacion, setMostrarAnimacion] = useState(false);

  const [registroData, setRegistroData] = useState({
    nombre: "",
    correo: "",
    curp: "",
    tipo_artesano: "",
    artesania: "",
    ap: "",
    am: "",
    calle: "",
    mz: "",
    lt: "",
    col: "",
    id_municipio: "",
    cp: "",
    telefono: "",
  });

  // Efecto para cargar la lista de municipios desde la API al montar el componente
  useEffect(() => {
    // Llamada a la API para obtener la lista de municipios
    // Reemplaza la URL con la ruta correcta de tu API
    fetch(server+"/api/municipios")
      .then((response) => response.json())
      .then((data) => setMunicipios(data))
      .catch((error) => console.error("Error fetching municipios:", error));
  }, []);

  const manejarCambioTipoUsuario = (tipo) => {
    setTipoUsuario(tipo);
  };

  const manejarCambioCampo = (campo, valor) => {
    setRegistroData((prevData) => ({
      ...prevData,
      [campo]: valor,
    }));
  };

  const manejarRegistro = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(server+"/api/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registroData),
      });

      console.log(JSON.stringify(registroData));

      if (response.ok) {
        // Mostrar la animación y limpiar el formulario
        setMostrarAnimacion(true);
        setRegistroData({
          nombre: "",
          correo: "",
          curp: "",
          tipo_artesano: "",
          artesania: "",
          ap: "",
          am: "",
          calle: "",
          mz: "",
          lt: "",
          col: "",
          id_municipio: "",
          cp: "",
          telefono: "",
        });
    } else {
        console.error("Error al registrar usuario");
        alert("Ocurrio un error, revisa tus campos.");
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      alert("Ocurrio un error, revisa tus campos.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Registro</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          {mostrarAnimacion ? (
              // Mostrar la animación Lottie si mostrarAnimacion es true
              <Lottie animationData={animationData} />
            ) : (
              // Mostrar el formulario si mostrarAnimacion es false
              <form onSubmit={manejarRegistro}>
              <div className="form-group my-3">
                <label htmlFor="NombreCompleto">Nombre Completo</label>
                <input
                  type="text"
                  className="form-control"
                  id="NombreCompleto"
                  placeholder="Ingresa tu Nombre"
                  onChange={(e) => manejarCambioCampo("nombre", e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="Apellidos">Apellidos</label>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="ApellidoPaterno"
                      placeholder="Apellido Paterno"
                      onChange={(e) => manejarCambioCampo("ap", e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="ApellidoMaterno"
                      placeholder="Apellido Materno"
                      onChange={(e) => manejarCambioCampo("am", e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group my-3">
                <label htmlFor="Correo">Correo Electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="Correo"
                  placeholder="nombre@ejemplo.com"
                  onChange={(e) => manejarCambioCampo("correo", e.target.value)}
                />
              </div>
              <div className="form-group my-4">
                <label htmlFor="Direccion" className="mb-2">
                  Dirección
                </label>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Calle"
                      placeholder="Calle"
                      onChange={(e) =>
                        manejarCambioCampo("calle", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Mz"
                      placeholder="Mz"
                      onChange={(e) => manejarCambioCampo("mz", e.target.value)}
                    />
                  </div>
                  <div className="col-md-3 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Lt"
                      placeholder="Lt"
                      onChange={(e) => manejarCambioCampo("lt", e.target.value)}
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-5 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="Col"
                      placeholder="Colonia o Localidad"
                      onChange={(e) =>
                        manejarCambioCampo("col", e.target.value)
                      }
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <select
                      className="form-control"
                      id="IdMunicipio"
                      onChange={(e) =>
                        manejarCambioCampo("id_municipio", e.target.value)
                      }
                    >
                      <option value="">Municipio</option>
                      {municipios.map((municipio) => (
                        <option key={municipio.id} value={municipio.id}>
                          {municipio.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="CP"
                      placeholder="CP"
                      onChange={(e) => manejarCambioCampo("cp", e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group my-3">
                <label htmlFor="CURP">CURP</label>
                <input
                  type="text"
                  className="form-control"
                  id="CURP"
                  placeholder="Ingresa tu CURP"
                  onChange={(e) => manejarCambioCampo("curp", e.target.value)}
                />
              </div>
              {tipoUsuario === "artesano" && (
                <>
                  <div className="form-group my-3">
                    <label htmlFor="TipoArtesano">Tipo de Artesano</label>
                    <input
                      type="text"
                      className="form-control"
                      id="TipoArtesano"
                      placeholder="Ingresa tu Tipo de Artesano"
                      onChange={(e) =>
                        manejarCambioCampo("tipo_artesano", e.target.value)
                      }
                    />
                  </div>
                  <div className="form-group my-3">
                    <label htmlFor="Artesania">Artesanía</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Artesania"
                      placeholder="Ingresa el tipo de Artesanía que elaboras"
                      onChange={(e) =>
                        manejarCambioCampo("artesania", e.target.value)
                      }
                    />
                  </div>
                </>
              )}
              <div className="form-group my-3">
                <label htmlFor="Telefono">Teléfono</label>
                <input
                  type="text"
                  className="form-control"
                  id="Telefono"
                  placeholder="Ingresa tu Número de Teléfono"
                  onChange={(e) =>
                    manejarCambioCampo("telefono", e.target.value)
                  }
                />
              </div>
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
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Inicia sesión
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Comenzar a participar
                </button>
              </div>
            </form>
                        )}

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
