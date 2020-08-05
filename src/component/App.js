import React from 'react';
import '../App.css'
import Home from './Home';
import Contact from './Contact';
import PORTFOLIO from './Portfolio';
import Nav from './Nav'
import Intro from './Intro'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div id="wrap">
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item-nav">
            <Nav />
          </div>
          <div className="flexbox-item flexbox-item-home">
            <Home />
          </div>
          <div className="flexbox-item flexbox-item-Iam">
            <Intro />
          </div>
          <div className="flexbox-item flexbox-item-portfolio">
             <PORTFOLIO/>
             </div>
          <div className="flexbox-item flexbox-item-contact">
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}




export default App;
