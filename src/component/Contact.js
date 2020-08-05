import React from 'react';
import Nav from './Nav'

const Contact = () => {

    return (
        <div className="flexbox-item flexbox-item-contact">
        <Nav />
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
                        <div className="button-area">
                            <input className="button" type="submit" id="submit" value="submit"></input>
                        </div>
                    </div>
                </div>
                <div className="contacts">
                    <div className="contacts-area-control">
                        <a className="github-control"
                            href="https://github.com/dasom08?tab=repositories">
                            <div className="github">
                            </div>
                        </a>
                        <a className="blog-control"
                            href="https://daydevlog.tistory.com/category/WIL">
                            <div className="blog"></div>
                        </a>
                        <div className="resume-control">
                            <div className="resume"></div>
                        </div>

                    </div>
                </div>
                <div className="footer">
                    ds.choi @2020
                </div>
            </div>
        </div>
    )

}

export default Contact;