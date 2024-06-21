import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import 'FinalF3\src\index.css';
import App from './App';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';
import { ContextProvider } from './Components/utils/global.context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
      <App/>
      </BrowserRouter>
      </ContextProvider>
  </React.StrictMode>
);


