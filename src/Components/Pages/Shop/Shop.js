import React, { Component } from 'react'
import styled from 'styled-components'
import img from '../../../Media/store.jpg'
import { BrowserRouter as Router, } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
    padding: 5% 0;
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

const Button = styled.button`
  background: #333;
  color: #ddd;
  border: 1px solid #333;
  border-radius: 2px;
  padding: 6px;
`

export class Store extends Component {
    render() {
        return (
            <Router>
                <Container >
                    <Card>
                        <Content>
                            <h1>Store</h1>
                            <p>
                                Acto Technologies is the top retail company for affordable and durable mobile phones, computers, parts and accessories. We are happy you are here today, and we'll like to show you our stock. Let's jump right in.
                            </p>
                        </Content>
                        <Content>
                                <NavLink to='/shop' activeStyle >
                                    <Button>Walk Into Shop</Button>
                                </NavLink>
                        </Content>
                    </Card>
                </Container>
            </Router>
        )
    }
}

export default Store
