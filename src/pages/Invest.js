import React, { useState } from "react";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import InvestOverview from "../components/partials/invest/invest-overview/InvestOverview";
import InvestPlan from "../components/partials/invest/invest-plan/InvestPlan";
import RecentInvest from "../components/partials/invest/recent-investment/RecentInvest";
import RecentActivity from "../components/partials/default/recent-activity/Activity";
import Notifications from "../components/partials/default/notification/Notification";
import { DropdownToggle, DropdownMenu, Card, UncontrolledDropdown, DropdownItem } from "reactstrap";
import {
  Block,
  BlockDes,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Button,
  Row,
  Col,
  PreviewAltCard,
  TooltipComponent,
} from "../components/Component";
import { BalanceBarChart, DepositBarChart, WithdrawBarChart } from "../components/partials/charts/invest/InvestChart";
import { Link } from "react-router-dom";

const InvestHomePage = () => {
  const [sm, updateSm] = useState(false);
  return (
    <React.Fragment>
      <Content>
      <section className="pt-0 pb-0">
      <div className="container-fluid px-0">
         <div className="row no-gutters">
            <div className="col-12">
               <div className="gen-banner-movies banner-style-2">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="1"
                     data-lap_num="1" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                     data-loop="true" data-margin="0">
                     <div className="item"  style={{"background":"url('../../images/background/asset-1.jpg')"}} >
                        <div className="gen-movie-contain-style-2 h-100">
                           <div className="container h-100">
                              <div className="row flex-row-reverse align-items-center h-100">
                                 <div className="col-xl-6">
                                    <div className="gen-front-image">
                                       <img src="../../images/background/asset-1.jpg" alt="owl-carousel-banner-image"/>
                                       <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="playBut popup-youtube popup-vimeo popup-gmaps">
                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="213.7px"
                                             height="213.7px" viewBox="0 0 213.7 213.7"
                                             enableBackground="new 0 0 213.7 213.7">
                                             <polygon className="triangle" id="XMLID_17_" fill="none" strokeWidth="7"
                                                strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                points="
                                                            73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                             <circle className="circle" id="XMLID_18_" fill="none" strokeWidth="7"
                                                strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                cx="106.8" cy="106.8" r="103.3">
                                             </circle>
                                          </svg>
                                          <span>Watch Trailer</span>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="col-xl-6">
                                    <div className="gen-tag-line"><span>Most Viewed</span></div>
                                    <div className="gen-movie-info">
                                       <h3>King of Skull</h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul className="gen-meta-after-title">
                                          <li className="gen-sen-rating">
                                             <span>
                                                12A</span>
                                          </li>
                                          <li> <img src="../../images/asset-2.png" alt="rating-image"/>
                                             <span>
                                                0 </span>
                                          </li>
                                       </ul>
                                       <p>Streamlab is a long established fact that a reader will be distracted
                                          by the readable content of a page The point of using Lorem Streamlab.
                                       </p>
                                       <div className="gen-meta-info">
                                          <ul className="gen-meta-after-excerpt">
                                             <li>
                                                <strong>Cast :</strong>
                                                Anna Romanson,Robert Romanson
                                             </li>
                                             <li>
                                                <strong>Genre :</strong>
                                                <span>
                                                   <a href="action.html">
                                                      Action, </a>
                                                </span>
                                                <span>
                                                   <a href="animation.html">
                                                      Annimation, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      Family </a>
                                                </span>
                                             </li>
                                             <li>
                                                <strong>Tag :</strong>
                                                <span>
                                                   <a href="#">
                                                      4K Ultra, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      Brother, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      Dubbing, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      Premieres </a>
                                                </span>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <div className="gen-btn-container">
                                          <a href="single-movie.html" className="gen-button .gen-button-dark">
                                             <i aria-hidden="true" className="fas fa-play"></i> <span className="text">Play
                                                Now</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item"   style={{"background":"url('../../images/background/asset-3.jpg')"}} >
                        <div className="gen-movie-contain-style-2 h-100">
                           <div className="container h-100">
                              <div className="row flex-row-reverse align-items-center h-100">
                                 <div className="col-xl-6">
                                    <div className="gen-front-image ">
                                       <img src="../../images/background/asset-3.jpg" alt="owl-carousel-banner-image"/>
                                       <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="playBut popup-youtube popup-vimeo popup-gmaps">
                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="213.7px"
                                             height="213.7px" viewBox="0 0 213.7 213.7"
                                             enableBackground="new 0 0 213.7 213.7" >
                                             <polygon className="triangle" id="XMLID_19_" fill="none" strokeWidth="7"
                                                strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                points="
                                                            73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                             <circle className="circle" id="XMLID_20_" fill="none" strokeWidth="7"
                                                strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                cx="106.8" cy="106.8" r="103.3">
                                             </circle>
                                          </svg>
                                       <span>Watch Trailer</span>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="col-xl-6">
                                    <div className="gen-tag-line"><span>Best Of 2021</span></div>
                                    <div className="gen-movie-info">
                                       <h3>The Express</h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul className="gen-meta-after-title">
                                          <li className="gen-sen-rating">
                                             <span>
                                                PG-14</span>
                                          </li>
                                          <li> <img src="../../images/asset-2.png" alt="rating-image"/>
                                             <span>
                                                8.5 </span>
                                          </li>
                                       </ul>
                                       <p>Streamlab is a long established fact that a reader will be distracted
                                          by the readable content of a page when Streamlab at its layout
                                          Streamlab.
                                       </p>
                                       <div className="gen-meta-info">
                                          <ul className="gen-meta-after-excerpt">
                                             <li>
                                                <strong>Cast :</strong>
                                                Robert Romanson,Anne Good
                                             </li>
                                             <li>
                                                <strong>Genre :</strong>
                                                <span>
                                                   <a href="action.html">
                                                      Action, </a>
                                                </span>
                                                <span>
                                                   <a href="adventure.html">
                                                      Adventure, </a>
                                                </span>
                                                <span>
                                                   <a href="biography.html">
                                                      Biography </a>
                                                </span>
                                             </li>
                                             <li>
                                                <strong>Tag :</strong>
                                                <span>
                                                   <a href="#">
                                                      4K Ultra, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      King, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      Premieres, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      viking </a>
                                                </span>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <div className="gen-btn-container">
                                          <a href="single-movie.html" className="gen-button gen-button-dark">
                                             <i aria-hidden="true" className="fas fa-play"></i> <span className="text">Play
                                                Now</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item"   style={{"background":"url('../../images/background/asset-4.jpg')"}}  >
                        <div className="gen-movie-contain-style-2 h-100">
                           <div className="container h-100">
                              <div className="row flex-row-reverse align-items-center h-100">
                                 <div className="col-xl-6">
                                    <div className="gen-front-image ">
                                       <img src="../../images/background/asset-4.jpg" alt="owl-carousel-banner-image"/>
                                       <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="playBut popup-youtube popup-vimeo popup-gmaps">
                                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="213.7px"
                                             height="213.7px" viewBox="0 0 213.7 213.7"
                                             enableBackground="new 0 0 213.7 213.7" >
                                             <polygon className="triangle" id="XMLID_21_" fill="none" strokeWidth="7"
                                                strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                points="
                                                            73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                             <circle className="circle" id="XMLID_22_" fill="none" strokeWidth="7"
                                                strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
                                                cx="106.8" cy="106.8" r="103.3">
                                             </circle>
                                          </svg>
                                          <span>Watch Trailer</span>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="col-xl-6">
                                    <div className="gen-tag-line"><span>High Rated</span></div>
                                    <div className="gen-movie-info">
                                       <h3>thieve the bank</h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul className="gen-meta-after-title">
                                          <li className="gen-sen-rating">
                                             <span>
                                                TV-MA</span>
                                          </li>
                                          <li> <img src="../../images/asset-2.png" alt="rating-image"/>
                                             <span>
                                                9.5 </span>
                                          </li>
                                       </ul>
                                       <p>Streamlab is a long established fact that a reader will be distracted
                                          by the readable content of a page when Streamlab at its layout
                                          Streamlab.
                                       </p>
                                       <div className="gen-meta-info">
                                          <ul className="gen-meta-after-excerpt">
                                             <li>
                                                <strong>Cast :</strong>
                                                Jennifer Lonez,Mars Shelley
                                             </li>
                                             <li>
                                                <strong>Genre :</strong>
                                                <span>
                                                   <a href="action.html">
                                                      Action, </a>
                                                </span>
                                                <span>
                                                   <a href="action.html">
                                                      Mystery </a>
                                                </span>
                                             </li>
                                             <li>
                                                <strong>Tag :</strong>
                                                <span>
                                                   <a href="#">
                                                      Brother, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      Hero, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      Premieres, </a>
                                                </span>
                                                <span>
                                                   <a href="#">
                                                      viking </a>
                                                </span>
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <div className="gen-btn-container">
                                          <a href="single-movie.html" className="gen-button gen-button-dark">
                                             <i aria-hidden="true" className="fas fa-play"></i> <span className="text">Play
                                                Now</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   {/* <section className="gen-section-padding-2">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
               <h4 className="gen-heading-title">All Time Hits</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
               <div className="gen-movie-action">
                  <div className="gen-btn-container text-right">
                     <a href="tv-shows-pagination.html" className="gen-button gen-button-flat">
                        <span className="text">More Videos</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row mt-3">
            <div className="col-12">
               <div className="gen-style-2">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                     data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                     data-loop="false" data-margin="30">
                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-5.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">The
                                             warrior life</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>2hr 00mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-6.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">machine
                                             war</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1h 22mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-7.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">the
                                             horse lady</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 24 mins</li>
                                          <li>
                                             <a href="drama.html"><span>Drama</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-8.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">Ship
                                             of full moon</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 35mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-9.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">Rebuneka
                                             the doll</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 44 mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-4.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">thieve
                                             the bank</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>30min</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-8.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">Ship of full moon</a></h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 35mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-11.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">the
                                             giant ship</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1h 02 mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-12.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">common
                                             man’s idea</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 51 mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-13.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">the
                                             jin’s friend</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 42 mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section className="pt-0 gen-section-padding-2">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
               <h4 className="gen-heading-title">Top Regional Shows</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
               <div className="gen-movie-action">
                  <div className="gen-btn-container text-right">
                     <a href="tv-shows-pagination.html" className="gen-button gen-button-flat">
                        <span className="text">More Videos</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row mt-3">
            <div className="col-12">
               <div className="gen-style-2">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                     data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                     data-loop="false" data-margin="30">
                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-14.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">ghost of sky</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>
                                             <a href="adventure.html"><span>Adventure</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="item">
                        <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-15.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">love in 21st</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>2 Seasons</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-drama movie_tag-4k-ultra movie_tag-brother movie_tag-king movie_tag-premieres">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-16.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">family love</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>0 Seasons</li>
                                          <li>
                                             <a href="drama.html"><span>Drama</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-comedy movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-17.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">dance nation dance</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>0 Seasons</li>
                                          <li>
                                             <a href="comedy.html"><span>Comedy</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-18.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">vacation life</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-mystery movie_tag-brother movie_tag-hero movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-19.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">dream of dragons</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>
                                             <a href="drama.html"><span>Drama</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-romance movie_tag-4k-ultra movie_tag-king movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-20.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">command in your hand</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>
                                             <a href="comedy.html"><span>Comedy</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-documentary movie_tag-4k-ultra movie_tag-brother movie_tag-king movie_tag-premieres">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-21.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">stories of the dark</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>
                                             <a href="biography.html"><span>Biography</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-sci-fi movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-22.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">3 Hackers:TBG</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>
                                             <a href="drama.html"><span>Drama</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-sport movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-13.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">friend of jin</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>
                                             <a href="drama.html"><span>Drama</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   <section className="gen-section-padding-2 pt-0 pb-0">
      <div className="container">
         <div className="home-singal-silder">
            <div className="gen-nav-movies gen-banner-movies">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="slider slider-for">
                        <div className="slider-item" style={{"background":"url('../../images/background/asset-4.jpg')"}} >
                           <div className="gen-slick-slider h-100">
                              <div className="gen-movie-contain h-100">
                                 <div className="container h-100">
                                    <div className="row align-items-center h-100">
                                       <div className="col-lg-6">
                                          <div className="gen-movie-info">
                                             <h3>thieve the bank</h3>
                                             <p>Streamlab is a long established fact that a reader will be distracted by
                                                the readable content of a page when Streamlab at its layout Streamlab.
                                             </p>

                                          </div>
                                          <div className="gen-movie-action">
                                             <div className="gen-btn-container button-1">
                                                <a className="gen-button" href="#" >
                                                   <i aria-hidden="true" className="ion ion-play"></i>
                                                   <span className="text">Play Now</span>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="slider-item" style={{"background":"url('../../images/background/asset-23.jpg')"}} >
                           <div className="gen-slick-slider h-100">
                              <div className="gen-movie-contain h-100">
                                 <div className="container h-100">
                                    <div className="row align-items-center h-100">
                                       <div className="col-lg-6">
                                          <div className="gen-movie-info">
                                             <h3>Love your life</h3>
                                             <p>Streamlab is a long established fact that a reader will be distracted by
                                                the readable content of a page when Streamlab at its layout Streamlab.
                                             </p>

                                          </div>
                                          <div className="gen-movie-action">
                                             <div className="gen-btn-container button-1">
                                                <a className="gen-button" href="#" >
                                                   <i aria-hidden="true" className="ion ion-play"></i>
                                                   <span className="text">Play Now</span>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="slider-item"  style={{"background":"url('../../images/background/asset-24.jpg')"}} >
                           <div className="gen-slick-slider h-100">
                              <div className="gen-movie-contain h-100">
                                 <div className="container h-100">
                                    <div className="row align-items-center h-100">
                                       <div className="col-lg-6">
                                          <div className="gen-movie-info">
                                             <h3>The Last Witness</h3>
                                             <p>Streamlab is a long established fact that a reader will be distracted by
                                                the readable content of a page when Streamlab at its layout Streamlab.
                                             </p>

                                          </div>
                                          <div className="gen-movie-action">
                                             <div className="gen-btn-container button-1">
                                                <a className="gen-button" href="#" >
                                                   <i aria-hidden="true" className="ion ion-play"></i>
                                                   <span className="text">Play Now</span>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="slider-item"  style={{"background":"url('../../images/background/asset-25.jpg')"}} >
                           <div className="gen-slick-slider h-100">
                              <div className="gen-movie-contain h-100">
                                 <div className="container h-100">
                                    <div className="row align-items-center h-100">
                                       <div className="col-lg-6">
                                          <div className="gen-movie-info">
                                             <h3>Fight For Life</h3>
                                             <p>Streamlab is a long established fact that a reader will be distracted by
                                                the readable content of a page when Streamlab at its layout Streamlab.
                                             </p>

                                          </div>
                                          <div className="gen-movie-action">
                                             <div className="gen-btn-container button-1">
                                                <a className="gen-button" href="#" >
                                                   <i aria-hidden="true" className="ion ion-play"></i>
                                                   <span className="text">Play Now</span>
                                                </a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="slider slider-nav">
                        <div className="slider-nav-contain">
                           <div className="gen-nav-img">
                              <img src="../../images/background/asset-4.jpg" alt="steamlab-image"/>
                           </div>
                           <div className="movie-info">
                              <h3>thieve the bank</h3>
                              <div className="gen-movie-meta-holder">
                                 <ul>
                                    <li>30mins</li>
                                    <li>
                                       <a href="action.html">
                                          Action </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="slider-nav-contain">
                           <div className="gen-nav-img">
                              <img src="../../images/background/asset-23.jpg" alt="streamlab-image"/>
                           </div>
                           <div className="movie-info">
                              <h3>Love your life</h3>
                              <div className="gen-movie-meta-holder">
                                 <ul>
                                    <li>1hr 46mins</li>
                                    <li>
                                       <a href="action.html">
                                          Action </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="slider-nav-contain">
                           <div className="gen-nav-img">
                              <img src="../../images/background/asset-24.jpg" alt="streamlab-image"/>
                           </div>
                           <div className="movie-info">
                              <h3>The Last Witness</h3>
                              <div className="gen-movie-meta-holder">
                                 <ul>
                                    <li>1hr 37 mins</li>
                                    <li>
                                       <a href="action.html">
                                          Action </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="slider-nav-contain">
                           <div className="gen-nav-img">
                              <img src="../../images/background/asset-25.jpg" alt="streamlab-image"/>
                           </div>
                           <div className="movie-info">
                              <h3>Fight For Life</h3>
                              <div className="gen-movie-meta-holder">
                                 <ul>
                                    <li>2hr 25 mins</li>
                                    <li>
                                       <a href="action.html">
                                          Action </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section> */}

   <section className="gen-section-padding-2">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
               <h4 className="gen-heading-title">Watch For Free: Movie Mania</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
               <div className="gen-movie-action">
                  <div className="gen-btn-container text-right">
                     <a href="tv-shows-pagination.html" className="gen-button gen-button-flat">
                        <span className="text">More Videos</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row mt-3">
            <div className="col-12">
               <div className="gen-style-2">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                     data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                     data-loop="false" data-margin="30">


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-1.jpg" alt="owl-carousel-video-../../images"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a  className="gen-button">
                                       <Link to={process.env.PUBLIC_URL + "/PlayVideo"} >
                                          <i className="fa fa-play"></i>
                                          </Link>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">King of Skull</a></h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>2hr 13mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-26.jpg" alt="owl-carousel-video-../../images"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">Spaceman The Voyager</a></h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1h 32mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-drama movie_tag-4k-ultra movie_tag-brother movie_tag-king movie_tag-premieres">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-27.jpg" alt="owl-carousel-video-../../images"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">I Can Only Imagine</a></h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 50mins</li>
                                          <li>
                                             <a href="drama.html"><span>Drama</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-comedy movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-3.jpg" alt="owl-carousel-video-../../images"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">The Express</a></h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>2hr 00mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-28.jpg" alt="owl-carousel-video-../../images"/>
                                    <div className="gen-movie-add">
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#"><i className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu">
                                             <a className="login-link" href="register.html">Sign
                                                in to add this movie to a playlist.</a>
                                          </div>
                                       </div>
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" aria-label="Like Button"
                                                className="wp_ulike_btn wp_ulike_put_image">
                                             </button>
                                          </div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">Chapter & Verse</a></h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 37 mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

   {/* <section className="pt-0 gen-section-padding-2 home-singal-silder">
      <div className="container">
         <div className="row">
            <div className="col-12">
               <div className="gen-banner-movies">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="true" data-nav="false" data-desk_num="1"
                     data-lap_num="1" data-tab_num="1" data-mob_num="1" data-mob_sm="1" data-autoplay="true"
                     data-loop="true" data-margin="30">
                     <div className="item"   style={{"background":"url('../../images/background/asset-20.jpg')"}}>
                        <div className="gen-movie-contain h-100">
                           <div className="container h-100">
                              <div className="row align-items-center h-100">
                                 <div className="col-xl-6">
                                    <div className="gen-movie-info">
                                       <h3>Command in your hand</h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>3 Episode</li>
                                          <li>2013</li>
                                          <li>
                                             <a href="#"><span>Comedy</span></a>
                                          </li>
                                       </ul>
                                       <p>Streamlab is a long established fact that a reader will be distracted by the
                                          readable content of a page when Streamlab at its layout Streamlab.</p>
                                    </div>
                                    <div className="gen-movie-action">
                                       <div className="gen-btn-container">
                                          <a href="single-episode.html" className="gen-button gen-button-dark">
                                             <span className="text">Play now</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item"   style={{"background":"url('../../images/background/asset-21.jpg')"}} >
                        <div className="gen-movie-contain h-100">
                           <div className="container  h-100">
                              <div className="row align-items-center h-100">
                                 <div className="col-xl-6">
                                    <div className="gen-movie-info">
                                       <h3>stories of the dark</h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>5 Episode</li>
                                          <li>2015 to 2016</li>
                                          <li>
                                             <a href="#"><span>Biography</span></a>
                                          </li>
                                       </ul>
                                       <p>Streamlab is a long established fact that a reader will be distracted by the
                                          readable content of a page when Streamlab at its layout Streamlab.</p>
                                    </div>
                                    <div className="gen-movie-action">
                                       <div className="gen-btn-container button-1">
                                          <a href="single-episode.html" className="gen-button gen-button-dark">
                                             <span className="text">Play now</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="item"  style={{"background":"url('../../images/background/asset-37.jpg')"}} >
                        <div className="gen-movie-contain h-100">
                           <div className="container  h-100">
                              <div className="row align-items-center h-100">
                                 <div className="col-xl-6">
                                    <div className="gen-movie-info">
                                       <h3>Against Beast</h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1 Season</li>
                                          <li>1 Episode</li>
                                          <li>2017 to 2018</li>
                                          <li>
                                             <a href="#"><span>Drama</span></a>
                                          </li>
                                       </ul>
                                       <p>Streamlab is a long established fact that a reader will be distracted by the
                                          readable content of a page when Streamlab at its layout Streamlab.</p>
                                    </div>
                                    <div className="gen-movie-action">
                                       <div className="gen-btn-container button-1">
                                          <a href="single-episode.html" className="gen-button gen-button-dark">
                                             <span className="text">Play now</span>
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section> */}
   
   {/* <section className="pt-0 gen-section-padding-2">
      <div className="container">
         <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
               <h4 className="gen-heading-title">All Time Hits</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-none d-md-inline-block">
               <div className="gen-movie-action">
                  <div className="gen-btn-container text-right">
                     <a href="tv-shows-pagination.html" className="gen-button gen-button-flat">
                        <span className="text">More Videos</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div className="row mt-3">
            <div className="col-12">
               <div className="gen-style-2">
                  <div className="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="true" data-desk_num="4"
                     data-lap_num="3" data-tab_num="2" data-mob_num="1" data-mob_sm="1" data-autoplay="false"
                     data-loop="false" data-margin="30">
                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-drama">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-10.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">skull of myths</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 24mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="item">
                        <div className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-12.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">common man's idea</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 51mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-drama movie_tag-4k-ultra movie_tag-brother movie_tag-king movie_tag-premieres">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-29.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">shimu the elephant</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 54mins</li>
                                          <li>
                                             <a href="drama.html"><span>Drama</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-comedy movie_tag-4k-ultra movie_tag-brother movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-30.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">war of rejonse</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>2hr 20mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-31.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">the big sick</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>2hr 00mins</li>
                                          <li>
                                             <a href="horror.html"><span>Horror</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-mystery movie_tag-brother movie_tag-hero movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-24.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">the last witness</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 37mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-romance movie_tag-4k-ultra movie_tag-king movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-32.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">love, simon</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1hr 50mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-adventure movie_genre-romance movie_tag-4k-ultra movie_tag-king movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-33.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">black water</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>1h 44mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>


                     <div className="item">
                        <div
                           className="movie type-movie status-publish has-post-thumbnail hentry movie_genre-action movie_genre-sci-fi movie_tag-brother movie_tag-king movie_tag-premieres movie_tag-viking">
                           <div className="gen-carousel-movies-style-2 movie-grid style-2">
                              <div className="gen-movie-contain">
                                 <div className="gen-movie-img">
                                    <img src="../../images/background/asset-34.jpg" alt="owl-carousel-video-image"/>
                                    <div className="gen-movie-add">
                                       <div className="wpulike wpulike-heart">
                                          <div className="wp_ulike_general_class wp_ulike_is_not_liked"><button
                                                type="button" className="wp_ulike_btn wp_ulike_put_image"></button></div>
                                       </div>
                                       <ul className="menu bottomRight">
                                          <li className="share top">
                                             <i className="fa fa-share-alt"></i>
                                             <ul className="submenu">
                                                <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                                </li>
                                                <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                             </ul>
                                          </li>
                                       </ul>
                                       <div className="movie-actions--link_add-to-playlist dropdown">
                                          <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                                className="fa fa-plus"></i></a>
                                          <div className="dropdown-menu mCustomScrollbar">
                                             <div className="mCustomScrollBox">
                                                <div className="mCSB_container">
                                                   <a className="login-link" href="register.html">Sign in to add this movie
                                                      to a
                                                      playlist.</a>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="gen-movie-action">
                                       <a href="single-movie.html" className="gen-button">
                                          <i className="fa fa-play"></i>
                                       </a>
                                    </div>
                                 </div>
                                 <div className="gen-info-contain">
                                    <div className="gen-movie-info">
                                       <h3><a href="single-movie.html">bad genius</a>
                                       </h3>
                                    </div>
                                    <div className="gen-movie-meta-holder">
                                       <ul>
                                          <li>2hr 10mins</li>
                                          <li>
                                             <a href="action.html"><span>Action</span></a>
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section> */}
   </Content>
    </React.Fragment>
  );
};

export default InvestHomePage;
