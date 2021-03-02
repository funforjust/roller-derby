import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React from 'react';
import './App.css';
import Inicio from './components/Inicio/Inicio';
import Header from './components/Header/Header';
import Equipos from './components/Equipos/Equipos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/Buttons/NavBar/NavBar';
import BurgerButtons from './components/Buttons/BurgerButtons/BurgerButtons'


function App() {
  return (
    <Router>
    <div className="container">
        <div className="content-buttons-burger"> 
        <BurgerButtons />
        </div> 
      {/*<div className="header-container">*/}
          <Header />
      {/*</div>*/}
      <div className="content-navbar-section">
        
        <div className="content-buttons-navbar"> 
          <NavBar/>
        </div>  
        
        <div className="content-section2">
        <Switch>
          <Route path='/' exact component={Inicio} />
          <Route path='/equipos' exact component={Equipos} />
          <Route path='/contacto' exact component={Contacto} />
          <Route component={NotFound} />
        </Switch>
        </div>
      </div>
      <Footer className="header-container"/> 
    </div>
    </Router>
  );
}

export default App;
