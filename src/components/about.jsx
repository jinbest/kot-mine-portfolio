import React from 'react';
import myImage from "../img/myImage.jpg";

class About extends React.Component{
    constructor(){
        super();
        this.state = {
            skills:[
                {id:"main-major", content: "React/Redux, React-hooks, Next, Mobx",porcentage: "95%", value: "95"},
                {id:"other-frameworks", content: "Vue/Vuex, Quasar, Nuxt, Svelte",porcentage: "85%", value: "85"},
                {id:"React-Redux_skill", content: "MaterialUI, Tailwind-CSS, AntD, Styled-Component",porcentage: "90%", value: "90"},
                {id:"Python-Django_skill", content: "Python/Django, DRF, Scraping, API integration",porcentage: "85%", value: "85"},
                {id:"Docker", content: "Docker, Kubernetes, Unit Test(Cypress, Jest)",porcentage: "75%", value: "75"},
                {id:"Node-Express_skill", content: "Node/Express, Sails",porcentage: "80%", value: "80"},
                {id:"Canvas-ThreeJS_skill", content: "Canvas/ThreeJS/SVG, Animations",porcentage: "90%", value: "90"}
            ],
            about_me:[
                {id: "1", content: "- React/Redux, React-hooks, Mobx"},
                {id: "2", content: "- Vue, Quasar, Nuxt and Svelte with FastAPI"},
                {id: "3", content: "- Material-UI, Tailwind-CSS, Antd, Bootstrap for front-end"},
                {id: "4", content: "- Responsive UI/UX, Pixel Perfect with Punctuality"},
                {id: "5", content: "- Data visualization with Chart for dashboard"},
                {id: "6", content: "- Animation with Canvas, ThreeJS and Framer-motion"},
                {id: "7", content: "- Payment integration with Stripe (including plaid)"},
                {id: "8", content: "- Register/Login with email confirmation"},
                {id: "9", content: "- JWT SSO for zendesk"},
                {id: "10", content: "- Docker, Kubernete and CI/CD for unit-test"},
                {id: "11", content: "- Referral program and logic"},
                {id: "12", content: "- API integration with Node and Python"},
                {id: "13", content: "- Deployment with AWS, Heroku, and Nginx"},
            ]
        }
    }

    render(){
        return (
            <section id="about" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-5" style={{margin: "0 auto"}}>
                                                <div className="about-img" style={{textAlign: "center"}}>
                                                    <img src={myImage} className="img-fluid rounded b-shadow-a" alt=""/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-md-7">
                                                <div className="about-info">
                                                <p><span class="title-s">Name: </span> <span>Jin Zheng</span></p>
                                                <p><span class="title-s">Profile: </span> <span>Full-Stack Engineer</span></p>
                                                <p><span class="title-s">Skype: </span> <span>live:.cid.12b0a37575b93ca3</span></p>
                                                <p><span class="title-s">Email: </span> <span>jin.bestvictoria718@gmail.com</span></p>
                                                <p><span class="title-s">Phone: </span> <span>(+86) 151 4231 0653</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            {/* <p className="title-s">Skill</p> */}
                                            {
                                                this.state.skills.map(skill => {
                                                    return(
                                                        <React.Fragment key={skill.id}>
                                                            <span>{skill.content}</span> <span className="pull-right">{skill.porcentage}</span>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={{width: skill.porcentage}} aria-valuenow={skill.value} aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-me pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title-left">
                                                What I have done so far
                                                </h5>
                                            </div>
                                            {
                                                this.state.about_me.map((content) => {
                                                    return <p className="lead" key={content.id}>{content.content}</p>;
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;