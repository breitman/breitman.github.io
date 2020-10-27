import React from 'react'
import styled, {keyframes} from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    align-self: flex-end;

    @media screen and (min-height: 750px){
        padding-top: 35vh;
    }
    @media screen and (max-height: 751px){
        padding-top: 30vh;
    }
`

const move = keyframes`
    from {
        left: -200%;
    }
    to {
        left: 200%;
    }
`
const Slide = styled.div`
    padding-right: 100px;
    position: relative;
    overflow-x: hidden;
    animation: ${move} 10s linear infinite;
` 

export default function Slider(props) {
    let count = 0;
    return (
        <Container>
            {props.slides.map((slide) => (
                <Slide key={`slide-${count++}`}>
                    {slide}
                </Slide>

            ))}
        </Container>
    )
}