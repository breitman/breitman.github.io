import React, {Component} from 'react'
import AboutMePage from './AboutMePage'
import {ProjectsPage, HomePage } from '..'

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <HomePage/>
        <AboutMePage/>
        <ProjectsPage/>
      </div>
    )
  }
}
