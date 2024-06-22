import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
  const {state,toggle_theme}= useContext(ContextGlobal);
  const { theme } = state;

  
  const handleToggleTheme = () => {
    toggle_theme();
  };
  
  return (
    <nav className={theme}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorites</Link>
      <button onClick={handleToggleTheme}>Cambiar Tema</button>
    </nav>
  );
};

export default Navbar;