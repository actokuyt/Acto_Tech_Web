import React, { Component } from 'react'
import LandingMedia from '../../../Media/LandingMedia.mp4'
import LandingCarousel from './LandingCarousel'
import styled from 'styled-components'; 


export const LandingOverlay = styled.div`
    height: 100vh;
    width: 100vw;
    box-shadow: 0px 1px 9px #666;
    position: relative;
    background: rgba(255,255,255,0.5);
`

export const Carousel = styled.div`
width: 45%;
margin: auto;
position: relative;
top: 20%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`

const landingMediaStyle = {
    height: '100vh',
    width: '100vw',
    position: 'absolute',
    objectFit: 'cover',  
}


export class Landing extends Component {
    render() {
        return (
            <div>
                <video autoPlay loop muted style = {landingMediaStyle}>
                    <source src={LandingMedia} type = 'video/mp4' />
                </video>
                <LandingOverlay>
                    <Carousel>
                        <LandingCarousel />
                    </Carousel>
                </LandingOverlay>
            </div>
        )
    }
}


export default Landing
