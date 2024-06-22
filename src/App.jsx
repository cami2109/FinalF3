import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import './index.css'
function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/detail/:id" Component={Detail}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/favs" Component={Favs}/>
          </Routes>

          <Footer/>
      </div>
  );
}

export default App;
