import React, { useRef, useState, useEffect } from 'react'
import img from './linked-in-profile.jpg'

import styled from 'styled-components'


let Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding-bottom: 200px;
`

let Text = styled.p`
  margin: 10%;
  vertical-align: middle;
  @media screen and (max-width: 1200px) {
    font-size: 19px;
  }
  @media screen and (min-width: 1201px) {
    font-size: 25px;
  }
  opacity: 0;
  transform: translateY(30vh);
  visibility: hidden;
  transition: opacity 3s ease-in, transform 2s ease-out;
  will-change: opacity, visibility;

  &.is-visible{
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`

let Image = styled.img`
  margin-right: 10%;
  height: auto;
  width: auto;
  right: auto;
  @media screen and (max-width: 1200px) {
    max-width: 270px;
    max-height: 400px;
  }
  @media screen and (min-width: 1201px) {
    max-width: 350px;
    max-height: 650px;
  }
  
`

export default function AboutMePage() {

  const [isVisible, setVisible] = useState(true);
  
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <Container id="aboutme">
        <Text className={isVisible ? 'is-visible' : ''}ref={domRef}>
          I was born and raised in Palm Beach Gardens, Florida.
          During my Sophomore year of High School, I became extremely
          interested in programming after enrolling in my first Computer
          Science class. I recently graduated from the University of
          Wisconsin-Madison with a BS degree in Computer Science and a
          Certificate in Entrepreneurship. I am also a graduate of the
          Fullstack Academy of Code!
        </Text>
      <Image src={img} />
    </Container>
  )
}