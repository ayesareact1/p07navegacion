import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Inicio from "./pages/Inicio";
import Soporte from "./pages/Soporte";

// Carga del componente mediante lazy loading

const InicioVentas = React.lazy(() => import('./modules/ventas/InicioVentas'));
const InicioRRHH = React.lazy(() => import('./modules/rrhh/InicioRRHH'));


function App() {

  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* La correspondiente a la ruta base del dominio*/}
        <Route path="soporte" element={<Soporte />} />
        {/* Ruta para módulo lazy loading */}
        <Route path="/ventas/*" element={
          <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
            <InicioVentas />
         </React.Suspense>
        } />
        <Route path="/recursos-humanos/*" element={
          <React.Suspense fallback={<p style={{textAlign: 'center'}}>Cargando...</p>}>
            <InicioRRHH />
         </React.Suspense>
        } />

        {/* Para las rutas no existentes usamos máscara * al final */}
        <Route path="*" element={
          <div className="container">
            <p>Lo sentimos, la página no existe</p>
            <Link to="/" ><button>Volver a inicio</button></Link>
          </div>
        }/>
      </Routes>
    </>
  );
}

export default App;
