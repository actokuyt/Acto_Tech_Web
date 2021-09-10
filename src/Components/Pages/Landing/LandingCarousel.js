import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'


export const CaruoselItem  = styled.div`
    color: #333;
    text-align: 'center',
    height: 18em;
    width: 100%;
    borderRadius: .5em;
    padding: 4em 1em;
    marginBottom: '4em'
`

class LandingCarousel extends Component {
    render() {
        return (
            <Carousel showThumbs = {false} autoFocus = {true} autoPlay = {true} infiniteLoop = {true} interval = {10000} showArrows = {false} showStatus = {false} stopOnHover = {true}  >
                <CaruoselItem>
                    <FontAwesomeIcon icon = 'tools' size = '4x' />
                    <h2>Repairs</h2>
                    <p >We're experts in software, hardware and networking consultancy. Feel free to access any of our outlets for the best services.  </p>
                </CaruoselItem>
                <CaruoselItem>
                    <FontAwesomeIcon icon = 'truck' size = '4x' />
                    <h2>Pickup And Delivery</h2>
                    <p >We understand your busy schedule and as such want to make the process much easier for you. Have our courier pickup your gadget and deliver to you once it's fixed.   </p>
                </CaruoselItem>
                <CaruoselItem>
                    <FontAwesomeIcon icon = 'certificate' size = '4x' />
                    <h2>Experience</h2>
                    <p >We've been in the fore-front of gadget repairs and maintainance for several years and can assure you we are exposed to the toughest problems and situations.</p>
                </CaruoselItem>
                <CaruoselItem>
                    <FontAwesomeIcon icon = 'comments' size = '4x' />
                    <h2>Instant Messaging</h2>
                    <p >Message us on any of your favourite platform, instagram, whatsapp, and even via E-mail. Your convenience is our concern.  </p>
                </CaruoselItem>
                <CaruoselItem>
                    <FontAwesomeIcon icon = 'heart' size = '4x' />
                    <h2>Just For You</h2>
                    <p >Regardless of your social, financial, and geographical status, we've got something for you.</p>
                </CaruoselItem>
               
            </Carousel>
        );
    }
};


export default LandingCarousel

