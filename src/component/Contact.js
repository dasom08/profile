import React from 'react';
import githubLogo from '../images/githubLogo.png'
import blog from '../images/blog.png'
import resume from '../images/resume.jpg'

const Contact = () => {

    return (
        <div className="contact-container">
            <div className="contact-title">
                CONTACT
                </div>
            <div className="contact-sub">
                have a question or want to work together?
                </div>
            <div className="contact-area">
                <div className="contact-area-control">
                    <input className="contact-input" placeholder="name"></input>
                    <input className="contact-input" placeholder="E-mail"></input>
                    <textarea className="contact-textarea" placeholder="Your Message"></textarea>
                    <div className = "button-area">
                    <input className= "button" type="submit" id="submit" value="submit"></input>
                    </div>
                </div>
            </div>
            <div className="contacts">
              <div className="contacts-area-control">
                <div className = "github-control">
                    <div className ="github"></div>
                </div>
                <div className = "blog-control">
                    <div className ="blog"></div>
                </div>
                <div className = "resume-control">
                    <div className ="resume"></div>
                </div>
              </div>
            </div>
            <div className="footer">
                ds.choi @2020
                </div>
        </div>

        // <div >
        //     <div>CONTACT</div>
        //     <a className="github" href="https://github.com/dasom08?tab=repositories">
        //         <i class="ion-logo-github">
        //             <img src={githubLogo} alt="contact"></img>
        //         </i>
        //     </a>
        //     <a className="blog" href="https://daydevlog.tistory.com/category/WIL">
        //         <i class="ion-logo-blog" >
        //             <img src={blog} alt="contact"></img>
        //         </i>
        //     </a>
        //     <i class="ion-logo-resume">
        //         <img src={resume} alt="contact"></img>
        //     </i>
        // </div>
    )

}

export default Contact;