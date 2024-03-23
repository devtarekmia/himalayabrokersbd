import React from 'react';
import heroThumbOne from '@images/hero-thumb-1.png';
import heroThumbTwo from '@images/hero-thumb-2.png';
import shapeTwo from '@images/shape/shape-2.png';
import shapeThree from '@images/shape/shape-3.png';
import shapeFour from '@images/shape/shape-4.png';

function HeroHomeOne() {
    return (
        <>
            <section className="appie-hero-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="appie-hero-content">
                                <span>Welcome To Himalaya Brokers Limited</span>
                                <h1 className="appie-title">
                                    Tea is one of the most popular drinks in the world.
                                </h1>
                                <p>
                                    Tea is a non-alcoholic drink that has been an inseparable part of the life of Bangladeshi people for ages.
                                </p>
                                <ul>

                                    <li>
                                        <a className="item-2" href="#">
                                            Learn More <i className="fal fa-arrow-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-hero-thumb">
                                <div
                                    className="thumb wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="200ms"
                                >
                                    <img src={heroThumbOne} alt="" />
                                </div>
                                <div
                                    className="thumb-2 wow animated fadeInRight"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="600ms"
                                >
                                    <img src={heroThumbTwo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-shape-1">
                    <img src={shapeTwo} alt="" />
                </div>
                <div className="hero-shape-2">
                    <img src={shapeThree} alt="" />
                </div>
                <div className="hero-shape-3">
                    <img src={shapeFour} alt="" />
                </div>
            </section>
        </>
    );
}

export default HeroHomeOne;
