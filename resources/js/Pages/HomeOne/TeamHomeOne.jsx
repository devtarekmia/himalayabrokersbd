import React from 'react';
import teamOne from '@images/team-1.jpg';
import teamTwo from '@images/team-2.jpg';
import teamThree from '@images/team-3.jpg';
import teamFour from '@images/team-4.jpg';

function TeamHomeOne() {
    return (
        <>
            <section className="appie-team-area pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Meet our Board of Directors</h3>
                                <p>Leadership, expertise, and dedication embodied by our esteemed Board of Directors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-center">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img src={teamOne} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">Harun-Or-Rashid</h5>
                                    <span>Chairman</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="appie-team-item appie-team-item-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img src={teamThree} alt="" />
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content text-left">
                                    <h5 className="title">Babul Akther</h5>
                                    <span>Managing Director</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TeamHomeOne;
