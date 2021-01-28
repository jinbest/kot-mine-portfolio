import React from 'react';

//import vmarine
import vmarine from "../img/Vmarine.jpg";
import vmarine1 from "../img/vmarine-1.png";
import vmarine2 from "../img/vmarine-2.png";
import vmarine3 from "../img/vmarine-3.png";
import vmarine4 from "../img/vmarine-4.png";
import vmarine5 from "../img/vmarine-5.png";
import vmarine6 from "../img/vmarine-6.png";
import vmarine7 from "../img/vmarine-7.png";

//aguadeluz pics
import aguaDeLuz from "../img/aguaDeLuz.png";
import aguaDeLuz1 from "../img/aguaDeLuz-1.png";
import aguaDeLuz2 from "../img/aguaDeLuz-2.png";
import aguaDeLuz3 from "../img/aguaDeLuz-3.png";
import aguaDeLuz4 from "../img/aguaDeLuz-4.png";

//import todo
import todoList from "../img/todolist.png";
import todoList1 from "../img/todo-1.png";
import todoList2 from "../img/todo-2.png";
import todoList3 from "../img/todo-3.png";

//import amtbw
import amtbw from "../img/amtbw.png";

//import medlingos
import medlingos from "../img/medlingos.jpg";
import medlingos1 from "../img/medlingos-1.jpg";
import medlingos2 from "../img/medlingos-2.jpg";
import medlingos3 from "../img/medlingos-3.jpg";
import medlingos4 from "../img/medlingos-4.jpg";

//import landing page
import product from "../img/product.png";

import reactScss from '../img/new-portfolios/react-scss/01_homepage.jpg';
import reactScss1 from '../img/new-portfolios/react-scss/02_dashboard.jpg';
import reactScss2 from '../img/new-portfolios/react-scss/03_setting.jpg';
import reactScss3 from '../img/new-portfolios/react-scss/04_membership.jpg';
import reactScss4 from '../img/new-portfolios/react-scss/05_billing_method.jpg';
import reactScss5 from '../img/new-portfolios/react-scss/06_register.jpg';

import nextDaily from '../img/new-portfolios/Next-dailyplant-app/01_homepage.jpg';
import nextDaily1 from '../img/new-portfolios/Next-dailyplant-app/02_homepage2.jpg';
import nextDaily2 from '../img/new-portfolios/Next-dailyplant-app/03_post_page.jpg';
import nextDaily3 from '../img/new-portfolios/Next-dailyplant-app/04_post_page2.jpg';
import nextDaily4 from '../img/new-portfolios/Next-dailyplant-app/05_post_page3.jpg';

import reactQuiz from '../img/new-portfolios/React-quiz-app/01_homepage.jpg';
import reactQuiz1 from '../img/new-portfolios/React-quiz-app/02_categories.jpg';
import reactQuiz2 from '../img/new-portfolios/React-quiz-app/03_test_practice.jpg';
import reactQuiz3 from '../img/new-portfolios/React-quiz-app/04_test_practice2.jpg';
import reactQuiz4 from '../img/new-portfolios/React-quiz-app/05_submit_results.jpg';
import reactQuiz5 from '../img/new-portfolios/React-quiz-app/06_results.jpg';

import adminpage from '../img/new-portfolios/adminpage/adminpage.jpg';

import reactProd from '../img/new-portfolios/react-product/1.jpg';
import reactProd1 from '../img/new-portfolios/react-product/2.jpg';
import reactProd2 from '../img/new-portfolios/react-product/3.jpg';
import reactProd3 from '../img/new-portfolios/react-product/4.jpg';
import reactProd4 from '../img/new-portfolios/react-product/5.jpg';

import chinesePod from '../img/new-portfolios/chinese-pod/1.jpg';
import chinesePod1 from '../img/new-portfolios/chinese-pod/2.jpg';
import chinesePod2 from '../img/new-portfolios/chinese-pod/3.jpg';
import chinesePod3 from '../img/new-portfolios/chinese-pod/4.jpg';
import chinesePod4 from '../img/new-portfolios/chinese-pod/5.jpg';
import chinesePod5 from '../img/new-portfolios/chinese-pod/6.jpg';
import chinesePod6 from '../img/new-portfolios/chinese-pod/7.jpg';

import canvasAni from '../img/new-portfolios/canvas-animation/1.jpg';
import canvasAni1 from '../img/new-portfolios/canvas-animation/2.jpg';
import canvasAni2 from '../img/new-portfolios/canvas-animation/3.jpg';

import modaEcomerce from '../img/new-portfolios/moda-ecomerce/1.jpg';
import modaEcomerce1 from '../img/new-portfolios/moda-ecomerce/2.jpg';
import modaEcomerce2 from '../img/new-portfolios/moda-ecomerce/3.jpg';
import modaEcomerce3 from '../img/new-portfolios/moda-ecomerce/4.jpg';
import modaEcomerce4 from '../img/new-portfolios/moda-ecomerce/5.jpg';
import modaEcomerce5 from '../img/new-portfolios/moda-ecomerce/6.jpg';

import reactDjangoChallenger from '../img/kot-portfolios/__React_Django_challenger/01.jpg';
import reactDjangoChallenger1 from '../img/kot-portfolios/__React_Django_challenger/02.jpg';
import reactDjangoChallenger2 from '../img/kot-portfolios/__React_Django_challenger/03.jpg';
import reactDjangoChallenger3 from '../img/kot-portfolios/__React_Django_challenger/04.jpg';
import reactDjangoChallenger4 from '../img/kot-portfolios/__React_Django_challenger/05.jpg';
import reactDjangoChallenger5 from '../img/kot-portfolios/__React_Django_challenger/06.jpg';
import reactDjangoChallenger6 from '../img/kot-portfolios/__React_Django_challenger/07.jpg';
import reactDjangoChallenger7 from '../img/kot-portfolios/__React_Django_challenger/08.jpg';
import reactDjangoChallenger8 from '../img/kot-portfolios/__React_Django_challenger/09.jpg';
import reactDjangoChallenger9 from '../img/kot-portfolios/__React_Django_challenger/10.jpg';
import reactDjangoChallenger10 from '../img/kot-portfolios/__React_Django_challenger/11.jpg';
import reactDjangoChallenger11 from '../img/kot-portfolios/__React_Django_challenger/12.jpg';
import reactDjangoChallenger12 from '../img/kot-portfolios/__React_Django_challenger/13.jpg';

class Portfolio extends React.Component{

    render(){
        return (
          <section id="work" className="portfolio-mf sect-pt4 route">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="title-box text-center">
                    <h3 className="title-a">
                      Portfolio
                    </h3>
                    <p className="subtitle-a">
                      Check Out My Latest Projects.
                    </p>
                    <div className="line-mf"></div>
                  </div>
                </div>
              </div>
              <div className="row flex">

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://prod-land.herokuapp.com/" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={reactProd} data-lightbox="gallery-react-prod">
                      <div className="work-img">
                        <img src={reactProd} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">React Landing Product</h2>
                            <div className="w-more">
                              <span className="w-ctegory">React, Framer-motion, Styled Component</span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={reactProd1} data-lightbox="gallery-react-prod" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactProd2} data-lightbox="gallery-react-prod" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactProd3} data-lightbox="gallery-react-prod" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactProd4} data-lightbox="gallery-react-prod" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://my.playchallenger.com/" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={reactDjangoChallenger} data-lightbox="gallery-reactDjangoChallenger">
                      <div className="work-img">
                        <img src={reactDjangoChallenger} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Player Challenger Interactive</h2>
                            <div className="w-more">
                              <span className="w-ctegory">React/Redux, Django, DRF, Zendesk, </span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={reactDjangoChallenger1} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger2} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger3} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger4} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger5} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger6} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger7} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger8} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger9} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger10} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger11} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactDjangoChallenger12} data-lightbox="gallery-reactDjangoChallenger" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://moda-new.herokuapp.com/" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={modaEcomerce} data-lightbox="gallery-ecomerce">
                      <div className="work-img">
                        <img src={modaEcomerce} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Moda-Ecomerce Website</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Shopify, JavaScript, ML, Tensorflow</span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={modaEcomerce1} data-lightbox="gallery-ecomerce" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={modaEcomerce2} data-lightbox="gallery-ecomerce" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={modaEcomerce3} data-lightbox="gallery-ecomerce" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={modaEcomerce4} data-lightbox="gallery-ecomerce" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={modaEcomerce5} data-lightbox="gallery-ecomerce" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://staging.chinesepod.com/" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={chinesePod} data-lightbox="gallery-react-scss">
                      <div className="work-img">
                        <img src={chinesePod} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">ChinesePod Project</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Vue, Nuxt, Node, Sails</span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={chinesePod1} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={chinesePod2} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={chinesePod3} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={chinesePod4} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={chinesePod5} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={chinesePod6} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://transl-eat.web.app/" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={reactScss} data-lightbox="gallery-react-scss">
                      <div className="work-img">
                        <img src={reactScss} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">React Scss Translet</h2>
                            <div className="w-more">
                              <span className="w-ctegory">ReactJS, SCSS, Firebase, Router</span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={reactScss1} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactScss2} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactScss3} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactScss4} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactScss5} data-lightbox="gallery-react-scss" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://itinterviews.netlify.com/" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={reactQuiz} data-lightbox="gallery-react-quiz">
                      <div className="work-img">
                        <img src={reactQuiz} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">React Quiz Desktop App</h2>
                            <div className="w-more">
                              <span className="w-ctegory">ReactJS, GraphQL, Netlify</span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={reactQuiz1} data-lightbox="gallery-react-quiz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactQuiz2} data-lightbox="gallery-react-quiz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactQuiz3} data-lightbox="gallery-react-quiz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactQuiz4} data-lightbox="gallery-react-quiz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={reactQuiz5} data-lightbox="gallery-react-quiz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://canvas-animation-muscular.herokuapp.com/" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={canvasAni} data-lightbox="gallery-canvas-animation">
                      <div className="work-img">
                        <img src={canvasAni} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Muscular Animator for the artist.</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Canvas, CSS, Animation, Image Combination</span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={canvasAni1} data-lightbox="gallery-canvas-animation" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={canvasAni2} data-lightbox="gallery-canvas-animation" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://eventstory.live" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={adminpage} data-lightbox="gallery-adminpage">
                      <div className="work-img">
                        <img src={adminpage} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">React admin page</h2>
                            <div className="w-more">
                              <span className="w-ctegory">React, Ant-Design, TypeScript</span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="https://next-dailyplant.herokuapp.com/" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={nextDaily} data-lightbox="gallery-next-daily">
                      <div className="work-img">
                        <img src={nextDaily} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Next-Daily Plant</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Next.js, GraphQL, CMS, Strapi</span><br />
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={nextDaily1} data-lightbox="gallery-next-daily" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={nextDaily2} data-lightbox="gallery-next-daily" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={nextDaily3} data-lightbox="gallery-next-daily" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={nextDaily4} data-lightbox="gallery-next-daily" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={vmarine} data-lightbox="gallery-vmarine">
                      <div className="work-img">
                        <img src={vmarine} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Vmarine</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap  Webpack  Wordpress  MySQL  ReactJS</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </a>
                      <a href={vmarine1} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine2} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine3} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine4} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine5} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine6} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                      <a href={vmarine7} data-lightbox="gallery-vmarine" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={aguaDeLuz} data-lightbox="gallery-aguadeluz">
                      <div className="work-img">
                        <img src={aguaDeLuz} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Agua De Luz</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap  Webpack SmoothScrolling  VanillaJS</span> {/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={aguaDeLuz1} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz2} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz3} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={aguaDeLuz4} data-lightbox="gallery-aguadeluz" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                {/* <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={todoList} data-lightbox="gallery-todo">
                      <div className="work-img">
                        <img src={todoList} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Todo List</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap  Webpack  ReactJS</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={todoList1} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={todoList2} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={todoList3} data-lightbox="gallery-todo" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div> */}

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={medlingos} data-lightbox="gallery-medlingos">
                      <div className="work-img">
                        <img src={medlingos} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Medlingos</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Bootstrap ReactJS GoogleAPI</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href={medlingos1} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos2} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos3} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                    <a href={medlingos4} data-lightbox="gallery-medlingos" style={{display: "none"}}>jsx-a11y/anchor-has-content warning</a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={amtbw} data-lightbox="gallery-amtbw">
                      <div className="work-img">
                        <img src={amtbw} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">A Mile To Be Wild</h2>
                            <div className="w-more">
                              <span className="w-ctegory">Wordpress  Blogging-Website</span>{/*/ <span className="w-date">18 Sep. 2018</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={{textAlign: 'center', marginBottom: '15px', fontSize: '12px'}}>
                    <a className='view-live-link' href="" target="_blank">Live Link</a>
                  </div>
                  <div className="work-box">
                    <a href={product} data-lightbox="gallery-mf">
                      <div className="work-img">
                        <img src={product} alt="" className="img-fluid"/>
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-sm-8">
                            <h2 className="w-title">Product Landing Page</h2>
                            <div className="w-more">
                              <span className="w-ctegory">HTML5  CSS3  Bootstrap</span>{/*/ <span className="w-date">18 Sep. 2017</span>*/}
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="w-like">
                              <span className="ion-ios-plus-outline"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
        );
    }
}

export default Portfolio;