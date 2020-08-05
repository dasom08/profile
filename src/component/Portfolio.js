import React from 'react';
import Nav from './Nav'


const PORTFOLIO = (props) => {
    return (
        <div className="flexbox-item flexbox-item-portfolio">
         <Nav />
        <div className="pro-container">
            <div className="project-title">PROJECTS</div>
            <div className="project-contents">
                <div className = "coming">
                    <div className = "soon">Coming Soon</div>
                </div>
                <div className = "coming">
                    <div className = "soon">Coming Soon</div>
                </div>
                <div className = "coming">
                    <div className = "soon">Coming Soon</div>
                </div>
            </div>
        </div>
        </div>
    );

}
export default PORTFOLIO;