import React, { Component } from 'react'
import styled from 'styled-components'
import img from '../../../Media/workstation.jpg'


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
    }
`

export class Workshop extends Component {
    render() {
        return (
            <Container >
                <Card>
                    <h1>Workshop</h1>
                </Card>
            </Container>
        )
    }
}

export default Workshop
