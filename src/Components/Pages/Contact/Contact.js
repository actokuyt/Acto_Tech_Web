import React, { Component } from 'react'
// import {Container, Card } from '../Pick_up/PickUp'
import styled from 'styled-components'
import img from '../../../Media/contact.jpg'


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
    margin: 8% auto;
    box-shadow: 2px 2px 9px #333;
    @media screen and (max-width: 768px) {
        margin: 20% auto;
    }
`

export class Contact extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <h1>Contact</h1>
                </Card>
            </Container>
        )
    }
}

export default Contact
