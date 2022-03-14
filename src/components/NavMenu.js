import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavMenu() {
  return (
    <nav>
        <div>Logo</div>
        <div>                        {/* La clase css activo esta en index.css */}
            <NavLink to="/" className={({isActive}) => isActive ? "activo" : ""}>
                Inicio
            </NavLink>
            <NavLink to="/soporte" className={({isActive}) => isActive ? "activo" : ""}>
                Soporte
            </NavLink>
        </div>
    </nav>
  )
}
