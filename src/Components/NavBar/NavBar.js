import React, { Component } from 'react' 
import { BrowserRouter as Router, } from 'react-router-dom';
import {Nav,NavLink,Bars,NavMenu, } from './NavBarElements';
import MobileNavBarMenu from './MobileNavBarMenu' 
import logo from '../../Images/logo.svg'



export class NavBar extends Component {
  state = {
    isMenuOpen : false,
  }

  render() {
    const isMenuOpen = this.state.isMenuOpen

    const handleBarClick = () => this.setState({
      isMenuOpen: !isMenuOpen
    })

    return (
      <Router>
        <Nav> 
          <NavLink to = 'home'  >
                <img src={logo} alt = '' style = {{height: '5em',}} />
          </NavLink>
          <NavMenu>
            <NavLink to='/pick-up' activeStyle>
              Pick-up and Delivery
            </NavLink>
            <NavLink to='/contact' activeStyle>
              Contact
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
          </NavMenu>
          <Bars onClick = {handleBarClick} />
          {isMenuOpen ? <MobileNavBarMenu /> : null}
        </Nav>
      </Router>  
    )
  }
}

export default NavBar
