import React, { Component } from 'react'
import styled from 'styled-components'
import img from '../../../Media/delivery.jpg'
import { BrowserRouter as Router, } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';


const Container = styled.div`
 background: url(${img});
 background-size: cover;
 background-attachment: fixed;
 background-position: center;
 width: 100vw;
 margin: auto;
 padding: 1em;
 height: 100vh;
`

const Card = styled.div`
    background: #ddd;
    width: 70%;
    height: 70%;
    margin: 5% auto;
    box-shadow: 2px 2px 9px #333;
    @media screen and (max-width: 768px) {
        margin: 20% auto;
        width: 90%;
    }
`
const Content = styled.div`
    width: 60%;
    margin: auto;
    text-align: center;
    padding: 10% 0;
    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 15% 0;
    }
`
const NavLink = styled(Link)` 
  color: #666;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`

export class PickUp extends Component {
    render() {
        return (
            <Router>
                <Container >
                    <Card>
                        <Content>
                            <h1>Home Service</h1>
                            <p>
                                Acto Technologies is deeply concerned with the comfort and satisfaction of her customers, as such we offer state of the art <b>Home Service</b> to our customers at very affordable rates. To use this service,
                            </p>
                        </Content>
                        <Content>
                                <NavLink to='/sign-up' activeStyle >
                                    <i>Sign-up </i>
                                </NavLink>|
                                <NavLink to='/sign-in' activeStyle >
                                    <i>Sign-in</i>
                                </NavLink>
                        </Content>
                    </Card>
                </Container>
            </Router>
        )
    }
}

export default PickUp
