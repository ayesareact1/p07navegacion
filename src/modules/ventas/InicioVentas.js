import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import TablaClientes from './clientes/TablaClientes'

export default function InicioVentas() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<InicioVentasLayout />}/>
        <Route path="tabla-clientes" element={<TablaClientes />} />
      </Route>
    </Routes>
  )
}

function InicioVentasLayout() {
  return (
    <div className="container">
      <h1>Ventas</h1>
      {/* <Link to="tabla-clientes"> Con ruta relativa */}
      <Link to="/ventas/tabla-clientes">
        <button>Clientes</button>
      </Link>
    </div>
  )
}
