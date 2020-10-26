import React, {Component} from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {NavHashLink as NavLink} from 'react-router-hash-link'

class NavBar extends Component {

  constructor(){
    super();
    this.scrollWithOffset = this.scrollWithOffset.bind(this);
  }
  scrollWithOffset(el, offset) {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    }) }   

  render() {
    return (
      <Navbar expand="lg" sticky="top">
        <Navbar.Brand style={{color: "white"}}href="/#home">Ben Reitman</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              to="/#home"
              scroll={el =>
                el.scrollIntoView({behavior: 'smooth', block: 'end'})
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/#aboutme"
              scroll={el =>{
                this.scrollWithOffset(el, 200)
              }}
            >
              About Me
            </NavLink>
            <NavLink //TODO: change this so that scrolls into correct view
              to="/#projects"
              scroll={el =>{
                this.scrollWithOffset(el, -50)
              }}
            >
              Projects
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar
