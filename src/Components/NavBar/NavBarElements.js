import { FaBars } from 'react-icons/fa'; 
import { NavLink as Link } from 'react-router-dom'; 
import styled from 'styled-components'; 



export const Nav = styled.nav` 
  background: #333;
  height: 3em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 10em;
  z-index: 12;
  position: fixed;
  top: 0;
  @media screen and (max-width: 1024px) {
    padding: 0 1em;
  }
  @media screen and (max-width: 425px) {
    padding: 0;
  }
`; 

  
export const NavLink = styled(Link)` 
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
`;

export const MobileNavLink = styled(Link)`
  color: #808080;
  display: block;
  align-items: center;
  text-decoration: none;
  padding: .5em .8em;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;


export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 1.2em;
    cursor: pointer;
  }
`; 


export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`; 

export const MobileNavMenu = styled.div`
  position: fixed;
  top: 3em; 
  right: 0;
  display: none;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    height: 100%;
    width: 100%;
    background-color: rgba(255 255 255 .9);
  }
`; 

  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`; 


export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
