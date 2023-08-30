import React from "react";
import classNames from "classnames";
import ChatDropdown from "./dropdown/chat/Chat";
import Toggle from "../sidebar/Toggle";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import User from "./dropdown/user/User";
import MobileMenu from "../menu/MobileMenu";
import menu from "../menu/MenuData";
import LanguageHead from "./dropdown/language/Language";
import {  Label, Input, Row, Col } from "reactstrap";

const Header = ({ fixed, theme, visibility, toggleSidebar, mobileView, className, ...props }) => {
   const headerClass = classNames({
      "nk-header is-regular": true,
      "nk-header-fixed": fixed,
      [`is-light`]: theme === "white",
      [`is-${theme}`]: theme !== "white" && theme !== "light",
      [`${className}`]: className,
    });

  return (
   <div className={headerClass}>
   <div className="container-fluid">
   
      <header id="gen-header" className="gen-header-style-1 gen-has-sticky">
      <div className="gen-bottom-header">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg navbar-light">
                     <a className="navbar-brand" href="#">
                        <img className="img-fluid logo" src="../../images/logo-1.png" alt="streamlab-image"/>
                     </a>
                     {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div id="gen-menu-contain" className="gen-menu-contain">
                           <ul id="gen-main-menu" className="navbar-nav ml-auto">
                              <li className="menu-item active">
                                 <a href="#" aria-current="page">Home</a>
                                 <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                 <ul className="sub-menu">
                                    <li className="menu-item active">
                                       <a href="index.html" aria-current="page">Main Home</a>
                                    </li>
                                    <li className="menu-item">
                                       <a href="movies-home.html" aria-current="page">Movies Home</a>
                                    </li>
                                    <li className="menu-item">
                                       <a href="tv-shows-home.html" aria-current="page">Tv Shows Home</a>
                                    </li>
                                    <li className="menu-item">
                                       <a href="video-home.html" aria-current="page">Video Home</a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item">
                                 <a href="#">Movies</a>
                                 <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                 <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children">
                                       <a href="#">Movies List</a>
                                       <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item">
                                             <a href="movies-load-more.html">Load More</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="movies-infinite-scroll.html">Infinite scroll</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="movies-pagination.html">Pagination</a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                       <a href="#">Movies Style</a>
                                       <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item">
                                             <a href="movies-style-1.html">Style 1</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="movies-style-2.html">Style 2</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="movies-style-3.html">Style 3</a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item">
                                       <a href="single-movie.html">Single Movie</a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item">
                                 <a href="#">Tv Shows</a>
                                 <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                 <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children">
                                       <a href="#">Tv Shows List</a>
                                       <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item">
                                             <a href="tv-shows-load-more.html">Load More</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="tv-shows-infinite-scroll.html">Infinite scroll</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="tv-shows-pagination.html">Pagination</a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                       <a href="#">Tv Shows Style</a>
                                       <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item">
                                             <a href="tv-shows-style-1.html">Style 1</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="tv-shows-style-2.html">Style 2</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="tv-shows-style-3.html">Style 3</a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item">
                                       <a href="single-tv-shows.html">Single Tv Shows</a>
                                    </li>
                                    <li className="menu-item">
                                       <a href="single-episode.html">Single Episode</a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item">
                                 <a href="#">Video</a>
                                 <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                 <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children">
                                       <a href="#">Video</a>
                                       <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item">
                                             <a href="video-load-more.html">Load More</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="video-infinite-scroll.html">Infinite scroll</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="video-pagination.html">Pagination</a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                       <a href="#">Videos Style</a>
                                       <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item">
                                             <a href="videos-style-1.html">Style 1</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="videos-style-2.html">Style 2</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="videos-style-3.html">Style 3</a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item">
                                       <a href="single-videos.html">Single videos</a>
                                    </li>
                                 </ul>
                              </li>
                              <li className="menu-item">
                                 <a href="#">Pages</a>
                                 <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                 <ul className="sub-menu">
                                    <li className="menu-item menu-item-has-children">
                                       <a href="#">Blog</a>
                                       <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item menu-item-has-children">
                                             <a href="#">Blog With Sidebar</a>
                                             <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                             <ul className="sub-menu">
                                                <li className="menu-item">
                                                   <a href="blog-left-sidebar.html">blog left sidebar</a>
                                                </li>
                                                <li className="menu-item">
                                                   <a href="blog-right-sidebar.html">blog right sidebar</a>
                                                </li>
                                             </ul>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item menu-item-has-children">
                                       <a href="#">Pricing</a>
                                       <i className="fa fa-chevron-down gen-submenu-icon"></i>
                                       <ul className="sub-menu">
                                          <li className="menu-item">
                                             <a href="pricing-style-1.html">Style 1</a>
                                          </li>
                                          <li className="menu-item">
                                             <a href="pricing-style-2.html">Style 2</a>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item">
                                       <a href="contact-us.html">Contact Us</a>
                                    </li>
                                 </ul>
                              </li>
                           </ul>
                        </div>
                     </div> */}
                     <div className="gen-header-info-box">
                        <div className="gen-menu-search-block">
                           <a href="javascript:void(0)" id="gen-seacrh-btn"><i className="fa fa-search"></i></a>
                           <div className="gen-search-form">
                              <form role="search" method="get" className="search-form" action="#">
                                 <label>
                                    <span className="screen-reader-text"></span>
                                    <Input type="search" className="search-field" placeholder="Search …" value="" name="s"/>
                                 </label>
                                 <button type="submit" className="search-submit"><span
                                       className="screen-reader-text"></span></button>
                              </form>
                           </div>
                        </div>
                        <div className="gen-account-holder">
                           <a href="javascript:void(0)" id="gen-user-btn"><i className="fa fa-user"></i></a>
                           <div className="gen-account-menu">
                              <ul className="gen-account-menu">
                                 
                                 <li>
                                    <a href="log-in.html"><i className="fas fa-sign-in-alt"></i>
                                       login </a>
                                 </li>
                                 <li>
                                    <a href="register.html"><i className="fa fa-user"></i>
                                       Register </a>
                                 </li>
                                 
                                 <li>
                                    <a href="library.html">
                                       <i className="fa fa-indent"></i>
                                       Library </a>
                                 </li>
                                 <li>
                                    <a href="library.html"><i className="fa fa-list"></i>
                                       Movie Playlist </a>
                                 </li>
                                 <li>
                                    <a href="library.html"><i className="fa fa-list"></i>
                                       Tv Show Playlist </a>
                                 </li>
                                 <li>
                                    <a href="library.html"><i className="fa fa-list"></i>
                                       Video Playlist </a>
                                 </li>
                                 <li>
                                    <a href="upload-video.html"> <i className="fa fa-upload"></i>
                                       Upload Video </a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className="gen-btn-container">
                           <a href="register.html" className="gen-button">
                              <div className="gen-button-block">
                                 <span className="gen-button-line-left"></span>
                                 <span className="gen-button-text">Subscribe</span>
                              </div>
                           </a>
                        </div>
                     </div>
                     <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                     </button>
                  </nav>
               </div>
            </div>
         </div>
      </div>
   </header>
    
     </div>
   </div>
  );
};
export default Header;
