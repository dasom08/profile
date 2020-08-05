import React from 'react';
import {
      Switch,
      Route,
      Link,
      NavLink,
      useRouteMatch,
      useParams
    } from "react-router-dom"

//Link를 사용해주면 리로드하지 않는다. 

const Nav = (props) => {

      // const clickNav = (e)=>{
      //       props.clickNav(e)
      // }

      return (
            <div className="flexbox-item flexbox-item-nav">
            <nav>
                  <NavLink exact className="navbtn" to = "/" >HOME</NavLink>
                  <NavLink exact className="navbtn" to = "/intro">I am</NavLink>
                  <NavLink exact className="navbtn" to = "/portfolio">PORTFOLIO</NavLink>
                  <NavLink exact className="navbtn" to = "/contact">CONTACT</NavLink>
            </nav>
            </div>
      );

}
export default Nav;