import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import 'FinalF3\src\index.css';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state,toggle_theme}= useContext(ContextGlobal);

  return (
    <nav className={state.theme}>
    <Link to="/home">Home</Link>
    <Link to="/Contact">Contact</Link>
    <Link to="/Favs">Favorites</Link>
    <button onClick={toggle_theme}>Cambiar Tema</button>
    </nav>
  )
}

export default Navbar