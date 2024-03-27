import React, { useRef } from 'react';
import heroSlider1 from '@images/slider/hero-slider1.jpg';
import heroSlider2 from '@images/slider/hero-slider2.jpg';
import heroSlider3 from '@images/slider/hero-slider3.jpg';
import heroSlider4 from '@images/slider/hero-slider4.jpg';
import heroSlider5 from '@images/slider/hero-slider5.jpg';
import heroSlider6 from '@images/slider/hero-slider6.jpg';
import heroSlider7 from '@images/slider/hero-slider7.jpg';
import heroSlider8 from '@images/slider/hero-slider8.jpg';
import heroSlider9 from '@images/slider/hero-slider9.jpg';
import heroSlider10 from '@images/slider/hero-slider10.jpg';
import heroSlider11 from '@images/slider/hero-slider11.jpg';
import heroSlider12 from '@images/slider/hero-slider12.jpg';
import heroSlider13 from '@images/slider/hero-slider13.jpg';
import heroSlider14 from '@images/slider/hero-slider14.jpg';
import { Link } from '@inertiajs/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function HeroHomeFour() {
    const sliderRef = useRef();
    const sliders = [
        heroSlider1, heroSlider2, heroSlider3, heroSlider4, heroSlider5,
        heroSlider6,
        heroSlider7,
        heroSlider8,
        heroSlider9,
        heroSlider10,
        heroSlider11,
        heroSlider12,
        heroSlider13,
        heroSlider14,
    ]
    const settings = {
        autoplay: true,
        infinite: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        arrows: false,
        dots: false,
    };
    const sliderNext = () => {
        sliderRef.current.slickNext();
    };
    const sliderPrev = () => {
        sliderRef.current.slickPrev();
    };
    return (
        <>
            <section className="appie-hero-area appie-hero-5-area appie-hero-3-area">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-lg-10">
                            <div className="appie-hero-content text-center">
                                <span className='leckerli-one-regula'>Welcome To Himalaya Brokers Limited</span>
                                <h1 className="appie-title">
                                    Tea is one of the most popular drinks in the world.
                                </h1>
                                <p>
                                    Tea is one of the world's oldest beverages, and is the most consumed drink in the world, after water.
                                </p>
                                <div className="hero-btns">
                                    <Link className="main-btn" href="/contact">
                                        Get Started
                                    </Link>

                                </div>
                                <div
                                    className="mx-auto thumb mt-80 pb-160 wow animated fadeInUp"
                                    data-wow-duration="2000ms"
                                    data-wow-delay="400ms"
                                >
                                    <div
                                        className="appie-video-player-slider"
                                        style={{ position: 'relative' }}
                                    >
                                        <span
                                            onClick={sliderPrev}
                                            className="prev slick-arrow"
                                            style={{ display: 'block' }}
                                        >
                                            <i className="fal fa-arrow-left" />
                                        </span>
                                        <Slider ref={sliderRef} {...settings}>
                                            {sliders.map((slider, index) => (
                                                <div className="item" key={index}>
                                                    <img src={slider} height={300} alt="" />
                                                </div>
                                            ))}
                                        </Slider>
                                        <span
                                            onClick={sliderNext}
                                            className="next slick-arrow"
                                            style={{ display: 'block' }}
                                        >
                                            <i className="fal fa-arrow-right" />
                                        </span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroHomeFour;
