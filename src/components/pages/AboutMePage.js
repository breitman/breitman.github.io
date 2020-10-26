import React, { useRef, useState, useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import img from './linked-in-profile.jpg'

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
      <Row>
        <Col className='about-container'>
          <p className={` about fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
            I was born and raised in Palm Beach Gardens, Florida.
            During my Sophomore year of High School, I became extremely
            interested in programming after enrolling in my first Computer
            Science class. I recently graduated from the University of
            Wisconsin-Madison with a BS degree in Computer Science and a
            Certificate in Entrepreneurship. I am also a graduate of the
            Fullstack Academy of Code!
            </p>
        </Col>
        <Col>
          <img className="about-image" src={img} />
        </Col>
      </Row>
    </Container>
  )
}