import React, { Component } from 'react'
import styled from 'styled-components'
import img from '../../../Images/test.jpg'


export const Container = styled.div`
 background: url(${img});
 background-size: cover;
 background-attachment: fixed;
 background-position: center;
 width: 100vw;
 margin: auto;
//  margin-top:  3em;
 padding: 1em;
 height: 100vh;
`

export class PickUp extends Component {
    render() {
        return (
            <Container >
                <h1>pickup</h1>
            </Container>
        )
    }
}

export default PickUp
