import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Pages/Landing/Landing';
import Shop from './Components/Pages/Shop/Shop';
import PickUp from './Components/Pages/HomeService/HomeService';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import React from 'react';
import ShopLanding from './Components/Pages/Shop/ShopLanding';


library.add(fab,fas)

function App() {
  return (
    <Router>
      <div className="App" >
        <NavBar />
        <Route exact path = '/' render = {props => (
          <React.Fragment>
            <Landing />
            <Shop />
            <PickUp />
            <Contact />
            <About />  
          </React.Fragment>
        )} />
        <Route path = '/shop' component = {ShopLanding} />
      </div>
    </Router>
  );
}

export default App;
