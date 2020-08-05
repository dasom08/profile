import React from 'react';
import '../App.css'
import HOME from './HOME'
import Contact from './Contact';
import PORTFOLIO from './Portfolio';
import Intro from './Intro'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

class App extends React.Component {
  render() {

    return (
      <div>
        <Switch>
          <Route exact path="/">
            <HOME />
          </Route>
          <Route exact path="/intro">
            <Intro />
          </Route>
          <Route exact path="/portfolio">
            <PORTFOLIO />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    )
  }
}




export default App;
