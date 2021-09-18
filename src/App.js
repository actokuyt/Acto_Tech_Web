import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Pages/Landing/Landing';
import Store from './Components/Pages/Store/Store';
// import Workshop from './Components/Pages/Workshop/Workshop';
import PickUp from './Components/Pages/Pick_up/PickUp';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';


library.add(fab,fas)

function App() {
  return (
    <div className="App" >
     <NavBar />
     <Landing />
     <Store />
     {/* <Workshop /> */}
     <PickUp />
     <Contact />
     <About />

    </div>
  );
}

export default App;
