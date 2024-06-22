import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContextProvider, ContextGlobal } from './Components/utils/global.context';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import './index.css';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ContextProvider>
  );
};

const AppContent = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <div className={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

