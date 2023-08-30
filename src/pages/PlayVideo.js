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

const PlayVideo = () => {
  const [sm, updateSm] = useState(false);
  return (
    <section className="gen-section-padding-3 gen-single-movie">
    <div className="container">
        <div className="row no-gutters">
            <div className="col-lg-12">
                <div className="gen-single-movie-wrapper style-1">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="gen-video-holder">
                                <iframe width="100%" height="550px" src="https://www.youtube.com/embed/LXb3EKWsInQ"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                            <div className="gen-single-movie-info">
                                <h2 className="gen-title">My Generation</h2>
                                <div className="gen-single-meta-holder">
                                    <ul>
                                        <li className="gen-sen-rating">TV-PG</li>
                                        <li>
                                            <i className="fas fa-eye">
                                            </i>
                                            <span>237 Views</span>
                                        </li>
                                    </ul>
                                </div>
                                <p>Streamlab is a long established fact that a reader will be distracted by the
                                    readable
                                    content of a page when Streamlab at its layout. The point of using Lorem
                                    Streamlab
                                    is that it has a more-or-less normal distribution of Streamlab as opposed
                                    Streamlab.
                                </p>
                                <div className="gen-after-excerpt">
                                    <div className="gen-extra-data">
                                        <ul>
                                            <li>
                                                <span>Language :</span>
                                                <span>English</span>
                                            </li>
                                            <li>
                                                <span>Subtitles :</span>
                                                <span>English</span>
                                            </li>
                                            <li>
                                                <span>Audio Languages :</span>
                                                <span>English</span>
                                            </li>
                                            <li><span>Genre :</span>
                                                <span>
                                                    <a href="action.html">
                                                        Action, </a>
                                                </span>
                                                <span>
                                                    <a href="adventure.html">
                                                        Documentary </a>
                                                </span>
                                            </li>
                                            <li><span>Run Time :</span>
                                                <span>1hr 24 mins</span>
                                            </li>
                                            <li>
                                                <span>Release Date :</span>
                                                <span>14 Aug,2018</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="gen-socail-share">
                                        <h4 className="align-self-center">Social Share :</h4>
                                        <ul className="social-inner">
                                            <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li><a href="#" className="facebook"><i className="fab fa-instagram"></i></a>
                                            </li>
                                            <li><a href="#" className="facebook"><i className="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="pm-inner">
                                <div className="gen-more-like">
                                    <h5 className="gen-more-title">More Like This</h5>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-5.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">The warrior life</a></h3>
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
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-4.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">Thieve the bank</a></h3>
                                                        </div>
                                                        <div className="gen-movie-meta-holder">
                                                            <ul>
                                                                <li>30mins</li>
                                                                <li>
                                                                    <a href="action.html"><span>Action</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-23.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">love your life</a></h3>
                                                        </div>
                                                        <div className="gen-movie-meta-holder">
                                                            <ul>
                                                                <li>1hr 46mins</li>
                                                                <li>
                                                                    <a href="action.html"><span>Action</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-53.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">my generation</a></h3>
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
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-26.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">spaceman the voyager</a>
                                                            </h3>
                                                        </div>
                                                        <div className="gen-movie-meta-holder">
                                                            <ul>
                                                                <li>1hr 32mins</li>
                                                                <li>
                                                                    <a href="action.html"><span>Action</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-24.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">The last witness</a></h3>
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
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-29.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">shimu the elephant</a>
                                                            </h3>
                                                        </div>
                                                        <div className="gen-movie-meta-holder">
                                                            <ul>
                                                                <li>1hr 54mins</li>
                                                                <li>
                                                                    <a href="action.html"><span>Action</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-33.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">black water</a></h3>
                                                        </div>
                                                        <div className="gen-movie-meta-holder">
                                                            <ul>
                                                                <li>1hr 44mins</li>
                                                                <li>
                                                                    <a href="action.html"><span>Action</span></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-8.jpg"
                                                            alt="streamlab-image"/>
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">shipe of full moon</a>
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
                                        <div className="col-xl-3 col-lg-4 col-md-6">
                                            <div className="gen-carousel-movies-style-3 movie-grid style-3">
                                                <div className="gen-movie-contain">
                                                    <div className="gen-movie-img">
                                                        <img src="../../images/background/asset-51.jpg"
                                                            alt="streamlab-image" />
                                                        <div className="gen-movie-add">
                                                            <div className="wpulike wpulike-heart">
                                                                <div
                                                                    className="wp_ulike_general_class wp_ulike_is_not_liked">
                                                                    <button type="button"
                                                                        className="wp_ulike_btn wp_ulike_put_image"></button>
                                                                </div>
                                                            </div>
                                                            <ul className="menu bottomRight">
                                                                <li className="share top">
                                                                    <i className="fa fa-share-alt"></i>
                                                                    <ul className="submenu">
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-facebook-f"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-instagram"></i></a>
                                                                        </li>
                                                                        <li><a href="#" className="facebook"><i
                                                                                    className="fab fa-twitter"></i></a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                            <div
                                                                className="movie-actions--link_add-to-playlist dropdown">
                                                                <a className="dropdown-toggle" href="#"
                                                                    data-toggle="dropdown"><i
                                                                        className="fa fa-plus"></i></a>
                                                                <div className="dropdown-menu mCustomScrollbar">
                                                                    <div className="mCustomScrollBox">
                                                                        <div className="mCSB_container">
                                                                            <a className="login-link" href="#">Sign in
                                                                                to add this movie to
                                                                                a
                                                                                playlist.</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="gen-movie-action">
                                                            <a href="movies-home.html" className="gen-button">
                                                                <i className="fa fa-play"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="gen-info-contain">
                                                        <div className="gen-movie-info">
                                                            <h3><a href="movies-home.html">The journey of a
                                                                    champion</a></h3>
                                                        </div>
                                                        <div className="gen-movie-meta-holder">
                                                            <ul>
                                                                <li>2hr 23mins</li>
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
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="gen-load-more-button">
                                                <div className="gen-btn-container">
                                                    <a className="gen-button gen-button-loadmore" href="#">
                                                        <span className="button-text">Load More</span>
                                                        <span className="loadmore-icon" style={{"display":"none"}} ><i
                                                                className="fa fa-spinner fa-spin"></i></span>
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
  );
};

export default PlayVideo;
