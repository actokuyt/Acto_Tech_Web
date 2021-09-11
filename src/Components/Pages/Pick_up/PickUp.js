import React, { Component } from 'react'
import styled from 'styled-components'
import img from '../../../Media/test.jpg'


export const Container = styled.div`
 background: url(${img});
 background-size: cover;
 background-attachment: fixed;
 background-position: center;
 width: 100vw;
 margin: auto;
 padding: 1em;
 height: 100vh;
 box-shadow: 5px 5px 9px #333;
`

export const Card = styled.div`
    background: #ddd;
    width: 70%;
    height: 70%;
    margin: 15% auto;
`

export class PickUp extends Component {
    render() {
        return (
            <Container >
                <Card>
                    <h1>pickup</h1>
                </Card>
            </Container>
        )
    }
}

export default PickUp
