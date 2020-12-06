import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "./Logo"
import Headroom from "react-headroom"

const Navigation = styled.nav`
  height: 90px;
  display: flex;
  background-color: #000;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;


  @media (max-width: 768px) {
    flex-direction: column;
    height: 92vh;
    
    position: fixed;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};

    width: 100%;

    justify-content: flex-start;
    padding-top: 10vh;
    transition: all 0.3s ease-in;
    background-color:#000;

  }
`

const Hamburger = styled.div`
  background-color:  ${props => (props.open ? "transparent" : "#fff")};
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
  
    width: 30px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
  props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  // function navbarHandler (navbarOpen,setNavbarOpen) {
  //   this.setState({
  //     navbarOpen, setNavbarOpen
  //   })
  // }


  const navbarHandler = () => {
    console.log("=========")
    console.log("Prev: " + navbarOpen)

    setNavbarOpen(navbarOpen => !navbarOpen)
    console.log("Αfter: " + navbarOpen)

  }

  return (

<Headroom disableInlineStyles>
  
  <Navigation  >

      <Logo />

      <Toggle
        // Inside Toggle we put the button <Hamburger>
        // Χ  It is <Hamburger open> when we press Toggle & navbarOpen is true
        // ≡  It is just <Hamburger> when navbarOpen is false
        // Navbox εμφανίζεται και εξαφανίζεται

        // navbarOpen = true (when the menu closes!!!)
        navbarOpen={navbarOpen}
        onClick = {navbarHandler}
        // onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
          <Navbox>
            
            <NavbarLinks navbarHandler navbarOpen setNavbarOpen={setNavbarOpen} cellphonesize={navbarOpen}



            />
          </Navbox>

      ) : (

        <Navbox  open>
         
          <NavbarLinks setNavbarOpen={setNavbarOpen} />
        </Navbox>

          )}


    </Navigation>
</Headroom>

  )
}

export default Navbar
