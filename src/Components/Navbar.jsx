import React from 'react';
import { routes } from '../Routes/routes';
import { Link } from 'react-router-dom';
// import { ThemeContext } from '../Context/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      <ul>
        <li>
           <Link className="nav-link" to={routes.home}>Home</Link>
           <Link className="nav-link" to={routes.contact}>Contact</Link>
           <Link className="nav-link" to={routes.favs}>Favs</Link> 
        </li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar