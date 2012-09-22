import React, { Component } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components'
import img from '../../../Media/about.jpg'



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
        width: 98%;
    }
`

const Content = styled.div`
    width: 60%;
    margin: auto;
    text-align: center;
    padding: 10% 0;
    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 25% 0;
    }
`

const NavLink = styled(Link)` 
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`

export class About extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <Card>
                        <Content>
                            <h1>About</h1>
                            <p>
                                Acto Technologies is the top retail company for affordable and durable mobile phones, computers, parts and accessories. We provide top-notch solutions to all your device related problems. We'll love you to make us your <b><i>Number 1</i></b> choice today.
                                <NavLink to='/about' activeStyle >
                                    <i>Learn More...</i>
                                </NavLink>
                            </p>
                        </Content>
                    </Card>
                </Container>
            </Router>
        )
    }
}

export default About
