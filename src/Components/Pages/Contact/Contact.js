import React, { Component } from 'react'
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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

const ContactItem = styled.div`
    padding: .8em;
`

const Whatsapp = styled(FaWhatsapp)`
    font-size: 2em;
    margin-right: .5em;
    color: #075e54;
`

const Insta = styled(FaInstagram)`
    font-size: 2em;
    color: #bc2a8d;
    margin-right: .5em;
`
const Email = styled(FaEnvelope)`
    font-size: 2em;
    color: #66f;
    margin-right: .5em;
`

const Address = styled(FaMapMarkerAlt)`
    color: #333;
`

export class Contact extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <Content>
                        <h1>Contact</h1>
                        <ContactItem>
                            <p>
                                <Whatsapp /> 08087149150
                            </p>
                        </ContactItem>
                        <ContactItem>
                            <p>
                                <Insta /> acto_technologies
                            </p>
                        </ContactItem>
                        <ContactItem>
                            <p>
                                <Email /> chibthankgod@gmail.com
                            </p>
                        </ContactItem>
                        <ContactItem>
                            <p>
                                <Address /> Shop 11 Confrank Plaza, #5 Warri Street Ishi Gate, Umuahia, Abia State, Nigeria.
                            </p>
                        </ContactItem>
                    </Content>
                </Card>
            </Container>
        )
    }
}

export default Contact
