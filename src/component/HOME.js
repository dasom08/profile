import React from 'react';
import HomeSub from './HomeSub';
import Contact from './Contact';
import PORTFOLIO from './Portfolio';
import Nav from './Nav'
import Intro from './Intro'


const HOME = (props) => {

      // const clickNav = ()=>{}

      return (
        <div id="wrap">
        <div className="flexbox-container">
          <div className="flexbox-item flexbox-item-nav">
            <Nav />
          </div>
          <div className="flexbox-item flexbox-item-home">
            <HomeSub />
          </div>
          <div>
            <Intro />
          </div>
          <div >
            <PORTFOLIO />
          </div>
          <div className="flexbox-item flexbox-item-contact">
            <Contact />
          </div>
        </div>
      </div>
      );

}
export default HOME;