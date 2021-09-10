import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import NavBar from './Components/NavBar/NavBar';
import Landing from './Components/Pages/Landing/Landing';
import PickUp from './Components/Pages/Pick_up/PickUp';


library.add(fab,fas)

function App() {
  return (
    <div className="App" >
     <NavBar />
     <Landing />
     <PickUp />

    </div>
  );
}

export default App;
