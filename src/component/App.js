import React from 'react';
import '../App.css'
import HOME from './HOME'
import Contact from './Contact';
import PORTFOLIO from './Portfolio';
import Intro from './Intro'
import Test from './Test'
import { Switch,Route } from "react-router-dom"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { users: []}
  }

  componentDidMount(){
    fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(users => this.setState({users}))
  }

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
          <Route exact path="/test">
            <Test user = {this.state.users}/>
          </Route>
        </Switch>
      
      </div>


    )
  }
}




export default App;
