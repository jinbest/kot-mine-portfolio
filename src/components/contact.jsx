import React from 'react';
import imageOverlay from "../img/earth.jpg";
import Form from './form';

// action = "https://formspree.io/kotdevops@gmail.com"

const socialLinksData = [
    {
        href: 'https://www.linkedin.com/in/kot-jin/',
        name: 'linkedin',
    },
    {
        href: 'https://github.com/jinbest/',
        name: 'github',
    },
    {
        href: 'https://join.skype.com/invite/ensTOJyv5ry7',
        name: 'skype',
    },
    {
        href: 'https://kot-dev.herokuapp.com/',
        name: 'blogger',
    },
    {
        href: 'https://jindev.herokuapp.com/',
        name: 'bimobject',
    }
]

const SocialIconLinks = ({ href, name }) => {
    return (
        <a href={href} className='mx-1' target='_blank'>
            <i className={'fab fa-' + name}></i>
        </a>
    )
}


class Contact extends React.Component{

    render(){
        return (
            <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: "url("+imageOverlay+")"}}>
                <div className="overlay-mf"></div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="contact-mf">
                        <div id="contact" className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="title-box-2">
                                <h5 className="title-left">
                                Send A Message
                                </h5>
                            </div>
                            <div>
                                <Form />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="title-box-2 pt-4 pt-md-0">
                                <h5 className="title-left">
                                Get in Touch
                                </h5>
                            </div>
                            <div className="more-info">
                                <p className="lead">
                                    Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.<br />
                                    Simply fill the form and send me an email here.<br/>
                                    You can use another options below.
                                </p>
                                <br/>
                                <ul class="list-ico">
                                    <li><span class="ion-ios-location"></span> Ganjinzi district 18, Dalian, Liaoning</li>
                                    <li><span class="ion-ios-telephone"></span> (+86) 151 4231 0653</li>
                                    <li><span class="ion-email"></span> jin.bestvictoria718@gmail.com</li>
                                </ul>
                            </div>
                            <br/>
                            <div className="socials">
                                <div className='footer-social-links'>
                                    {socialLinksData.map((link, index) => (
                                        <SocialIconLinks
                                            href={link.href}
                                            name={link.name}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="copyright-box">
                        <p className="copyright">{new Date().getFullYear()} &copy; Copyright <strong>Jin Zheng</strong>. All Rights Reserved</p>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
            </section>
        );
    }
}

export default Contact;