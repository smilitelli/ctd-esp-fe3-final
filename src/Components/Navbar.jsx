import React from 'react';
import { routes } from '../Routes/routes';
import { Link } from 'react-router-dom';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';
import { themes } from '../Context/ThemeContext/themes';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setTheme } = useThemeStates();

  const manejarTema = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light;
    setTheme(newTheme);
  };

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
      <button className="button-theme">Change theme</button>
    </nav>
  )
}

export default Navbar