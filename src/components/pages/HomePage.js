import React, { useEffect, useState, useRef } from 'react'
import Typed from 'typed.js'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import GraphQl_Logo from '../../logos/graphql.svg'
import { Fade } from '@material-ui/core'

import HTML_Logo from '../../logos/html-5.svg'
import Javascript_Logo from '../../logos/javascript.svg'
import Node_Logo from '../../logos/nodejs-1.svg'
import React_Logo from '../../logos/react.svg'
import Redux_Logo from '../../logos/redux.svg'
import Jest_Logo from '../../logos/jest-0.svg'
import CSS_Logo from '../../logos/css3.svg'
import Python_Logo from '../../logos/python-5.svg'
import Typescript_Logo from '../../logos/typescript.svg'
import Unity_Logo from '../../logos/unity-69.svg'
import Java_Logo from '../../logos/java-4.svg'
import Git_Logo from '../../logos/git.svg'
import FireBase_Logo from '../../logos/firebase-1.svg'
import PostGres_Logo from '../../logos/postgresql.svg'
import Slider from '../helpers/Slider.js'

let Icon = styled(FontAwesomeIcon)`

  color: white;
  transition: transform .2s;
  &:hover{
    transform: scale(1.5);
  }
`

let Logo = styled.img`
  padding-right: 60px;
  height: auto;
  width: 130px;
`

let Scroller = styled(Slider)`
  display: flex;
  align-self: end;
`


export default function HomePage() {

  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();

  let slides = [

    <Logo src={Python_Logo} alt="Python Logo" />,
    <Logo src={Typescript_Logo} alt="TS Logo" />,
    <Logo src={Unity_Logo} alt="Unity Logo" />,
    <Logo src={FireBase_Logo} alt="Firebase logo" />,
    <Logo src={PostGres_Logo} alt="Postgresql Logo" />,
    <Logo src={Java_Logo} alt="Java Logo" />,
    <Logo src={Git_Logo} alt="Git Logo" />,
    <Logo src={GraphQl_Logo} alt="GraphQL Logo" />,
    <Logo src={HTML_Logo} alt="HTML Logo" />,
    <Logo src={Javascript_Logo} alt="JS Logo" />,
    <Logo src={Node_Logo} alt="Node Logo" />,
    <Logo src={React_Logo} alt="React Logo" />,
    <Logo src={Redux_Logo} alt="Redux Logo" />,
    <Logo src={Jest_Logo} alt="Jest Logo" />,
    <Logo src={CSS_Logo} alt="CSS Logo" />,
  ]

  useEffect(() => {
 

    const options = {
      strings: [
        `I am <span style="color: #4eb5f1"> Ben Reitman</span>`,
        'I am a <span style="color: #4eb5f1">Programmer</span>',
        'I am a <span style="color: #4eb5f1">Traveler</span>',
        'I am a <span style="color: #4eb5f1">Gamer</span>',
        'I am an <span style="color: #4eb5f1">Athlete</span>'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 800,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      showCursor: false
    }
    const typed = new Typed('#instruction', options)

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);
    return () => {
      typed.destroy();
      observer.unobserve(domRef.current);
    }
  }, []);

  return (
      <Fade in={isVisible} timeout={3000} ref={domRef}>
        <div id="home">
          <header className="home">
            <br />
            <h1
              className="typer"
              id='instruction'
              style={{
                whiteSpace: 'pre',
                textAlign: 'center',
                color: 'white',
                verticalAlign: 'middle'
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <a
                className="icon"
                href="https://github.com/breitman"
                target="_blank"
                style={{ textAlign: 'center' }}
              >
                <Icon
                  icon={['fab', 'github']}
                  size="5x"
                />
              </a>
              <a
                className="icon"
                href="https://www.linkedin.com/in/benjamin-reitman-769b21161/"
                target="_blank"
              >
                <Icon
                  icon={['fab', 'linkedin']}
                  size="5x"
                  transform="right-1"
                />
              </a>
              <a
                className="icon"
                href="https://docs.google.com/document/d/e/2PACX-1vR_TdaXa9dBPiJufiA0gPVIU2urvdOkCHqN3hliCuOV69XrAZ8Ro4o8CAJg18RDGx2HeLXM5tnhp5UA/pub"
                target="_blank"
                download
              >
                <Icon
                  icon="file-alt"
                  size="5x"
                  transform="right-3"
                />
              </a>
            </div>
            <div>
              <Scroller slides={slides} />
            </div>
          </header>
        </div>
      </Fade>
  )
}
