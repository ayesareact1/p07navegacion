import { Route, Routes } from "react-router-dom";
import NavMenu from "./components/NavMenu";
import Inicio from "./pages/Inicio";
import Soporte from "./pages/Soporte";

function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Inicio />} /> {/* La correspondiente a la ruta base del dominio*/}
        <Route path="soporte" element={<Soporte />} />
      </Routes>
    </>
  );
}

export default App;
