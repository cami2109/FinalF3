import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './Components/utils/global.context';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App/>
      </ContextProvider>
  </React.StrictMode>
);


