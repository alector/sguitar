import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  font-family: "Roboto";
  font-weight: 700;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  
  color: #78757a;


  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #fff;
    height: 2px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #fff;

    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1rem;
    z-index: 6;
  }
`
const NavbarLinks = (props) => {
  return (
    <>
      <NavItem cellphonesize={props.cellphonesize} to="/">About</NavItem>
      <NavItem cellphonesize={props.cellphonesize} to="/404">Services</NavItem>
      <NavItem cellphonesize={props.cellphonesize} to="/">Gallery</NavItem>
      <NavItem cellphonesize={props.cellphonesize} to="/404">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
