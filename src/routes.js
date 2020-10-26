import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './components/pages/MainPage'


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    )
  }
}
export default Routes

