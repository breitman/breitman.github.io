import React, {Component} from 'react'
import ProjectCard from '../cards/ProjectCard'
import styled from 'styled-components'


let projects = [
  {
    name: 'Poodle',
    description:
      'An open source experimental email client with social features.',
    href: 'https://github.com/PoodleApp/poodle',
    goTo: 'Go to Github'
  },
  {
    name: 'ARcity',
    description:
      'An immersive Augmented Reality iOS experience that allows users to walk around the city, play AR games, and earn fun collectable trophies.',
    href: 'https://github.com/Capstone-mARio/ARcity',
    goTo: 'Go to Github'
  },
  { //BLANK PROJECT MODEL
    name: 'Tab-U-Later',
    description: 'A Google Chrome extension that manages your tab sessions. With this tool, one can save Chrome windows to go back to at some other point in time.',
    goTo: 'Go to Github'
  },
  { //GET A TM supertext on STAR WARS
    name: 'StarShips',
    description:
      'A parody e-commerce website that sells starships as seen in the Star Wars™ series.',
    href: 'https://grace-starships.herokuapp.com/',
    goTo: 'Go to StarShips'
  },
  {
    name: 'The Floor is Lava',
    description:
      'A single player, 2D platformer, endless runner game, where a player has to jump from one platform to another, without falling into the lava. Each platform has its own characteristics, keeping the game challenging and the players’ next moves uncertain.',
    href: 'https://simmer.io/@b_reity/the-floor-is-lava',
    goTo: 'Go to Game'
  },
  {
    name: 'Zombie Shooter',
    description:
      'A First Person Shooter, zombie surviver game. The objective is to survive rounds by shooting incoming zombies with fun objects picked up from the ground.',
    href: 'https://simmer.io/@b_reity/zombie-killer-5000',
    goTo: 'Go to Game'
  },
  {
    name: '537Make',
    description: 'An imitation of the make utility in Linux/Unix.',
    goTo: 'Go to Github',
    href: 'https://github.com/breitman/537make'
  },
  { //BLANK PROJECT MODEL
    name: 'malloc/free',
    description: 'A mock implementation of the malloc and free routines run in C.',
    goTo: 'Go to Github',
    disable: true
  },
  
]

let count = 1;

const ProjCard  = styled(ProjectCard)`
  transition: transform .3s;
  &:hover{
    transform: scale(1.5);
  }
`

const Container = styled.div`
  display: flex;
  align-content: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`

class ProjectsPage extends Component {

  render() {
    return (
      <div className="projects" id="projects">
        <h1 className="project-title">Projects</h1>
        <Container>
            {projects && projects.map(project => (
              <ProjCard
                className="card"
                project={project}
                key={count++}
              />
            ))}
        </Container>
      </div>
    )
  }
}

export default ProjectsPage;
