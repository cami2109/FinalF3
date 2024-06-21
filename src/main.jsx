import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './index.css';
import { ContextProvider } from './Components/utils/global.context';
import App from './App';

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


