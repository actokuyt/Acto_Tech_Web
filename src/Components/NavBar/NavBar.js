import React, { Component } from 'react' 
import { BrowserRouter as Router, } from 'react-router-dom';
import {Nav,NavLink,Bars,NavMenu,MobileNavMenu,MobileNavLink } from './NavBarElements';
import styled from 'styled-components';
import logo from '../../Media/logo.png'


export class NavBar extends Component {
  state = {
    isMenuOpen : false,
  }

  render() {
    const isMenuOpen = this.state.isMenuOpen

    const handleBarClick = () => this.setState({
      isMenuOpen: !isMenuOpen
    })

    const Container = styled.div`
    width: 40%;
    background: #333;
    height: 100%;
    position: absolute;
    right: 0px;
    @media screen and (max-width: 768px) {
      width: 60%;
    }
    `

    function MobileNavBarMenu() {
      return (
          <div>
          <MobileNavMenu onClick = {handleBarClick}  >
            <Container>
              <MobileNavLink to='/shop' activeStyle>
                Shop
              </MobileNavLink>
              <MobileNavLink to='/homeService' activeStyle>
                Home Service
              </MobileNavLink>
              <MobileNavLink to='/contact' activeStyle>
                Contact
              </MobileNavLink>
              <MobileNavLink to='/about' activeStyle>
                About
              </MobileNavLink>
              <MobileNavLink to='/signIn' activeStyle>
                Sign In
              </MobileNavLink>
              <MobileNavLink to='/signUp' activeStyle>
                Sign Up
              </MobileNavLink>
            </Container>
          </MobileNavMenu>
          </div>
      )
    }


    return (
      <Router>
        <Nav> 
          <NavLink to = 'home'  >
                <img src={logo} alt = '' style = {{height: '2.5em',}} />
          </NavLink>
          <NavMenu>
            <NavLink to='/shop' activeStyle>
                Shop
            </NavLink>
            <NavLink to='/home' activeStyle>
              Home Service
            </NavLink>
            <NavLink to='/contact' activeStyle>
              Contact
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/signIn' activeStyle>
              Sign In
            </NavLink>
            <NavLink to='/signUp' activeStyle>
              Sign Up
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
