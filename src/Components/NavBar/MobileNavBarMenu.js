import React from 'react'
import {MobileNavMenu,MobileNavLink} from './NavBarElements'



function MobileNavBarMenu() {
    return (
        <div>
        <MobileNavMenu >
          <MobileNavLink to='/pick-up' activeStyle>
            Pick-up and Delivery
          </MobileNavLink>
          <MobileNavLink to='/contact' activeStyle>
            Contact
          </MobileNavLink>
          <MobileNavLink to='/about' activeStyle>
            About
          </MobileNavLink>
        </MobileNavMenu>
        </div>
    )
}

export default MobileNavBarMenu
