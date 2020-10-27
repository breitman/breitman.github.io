import React, { useState, useRef, useEffect } from 'react'
// import Card from 'react-bootstrap/Card'
import styled from 'styled-components'
import { Grow } from '@material-ui/core'

let Card = styled.div`
    width: 350px;
    height: 350px;
    display: flex;
    flex-wrap: wrap;
    margin: 30px;
    background-color: #6200EE;
    -webkit-box-shadow: 0  5px 10px rgba(0,0,0,1), 0 15px 40px rgba(0,0,0,1);
    -moz-box-shadow: 0  5px 10px rgba(0,0,0,1), 0 15px 40px rgba(0,0,0,1);
    box-shadow: 0  5px 10px rgba(0,0,0,1), 0 15px 40px rgba(0,0,0,1);
  `

let Header = styled.h3`
    margin-top: 30px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    color: white;
  `

let Body = styled.p`
    display: flex;
    // align-items: center;
    margin-left: 5%;
  `

let Link = styled.a`
    background-color: #BB86FC;
    display:flex;
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:white;
    background-color:#4eb5f1;
    text-align:center;
    height: 50px;
    width: 100px;
    margin-right: 10px;
    margin-left: auto;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px 5px rgba(0,0,0,0.6);

    &:hover{
      text-decoration: none;
      color: white;
      background-color:rgba(0, 0, 0, 0.5);
    }

    &.disabled{
      background-color: grey;
    }
   

  `

export default function ProjectCard(props) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  const project = props.project

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <Grow in={isVisible} timeout={2000} ref={domRef}>
      <Card>
        <Header>{project.name}</Header>
        <Body>{project.description}</Body>
        <Link className={project.disable ? 'disabled' : ''} href={project.href}>{project.goTo}</Link>
      </Card>
    </Grow>
  )
}