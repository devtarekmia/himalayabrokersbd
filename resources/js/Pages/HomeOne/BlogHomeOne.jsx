import React from 'react';
import blogOne from '@images/blog-1.jpg';
import blogTwo from '@images/blog-2.jpg';
import blogThree from '@images/blog-3.jpg';

function BlogHomeOne() {
    return (
        <>
            <section className="appie-blog-area pt-90 pb-95">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title text-center">
                                <h3 className="appie-title">Latest News</h3>
                                <p>Find latest news from every corner of the globe.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="thumb">
                                    <img src={blogOne} alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>September 03, 2023</li>
                                            <li>
                                                <a href="#">Economy</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="https://www.thedailystar.net/business/economy/news/third-tea-auction-centre-launched-panchagarh-3409596" target='_blank' referrerPolicy='no-referrer'>
                                            Third tea auction centre launched in Panchagarh
                                        </a>
                                    </h3>
                                    <a href="https://www.thedailystar.net/business/economy/news/third-tea-auction-centre-launched-panchagarh-3409596" target='_blank' referrerPolicy='no-referrer'>
                                        Read More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="thumb">
                                    <img src={blogTwo} alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>August 22, 2023</li>
                                            <li>
                                                <a href="#">Economy</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="https://www.thedailystar.net/business/economy/news/long-term-plan-behind-high-tea-production-3399926">
                                            Long-term plan behind high tea production
                                        </a>
                                    </h3>
                                    <a href="https://www.thedailystar.net/business/economy/news/long-term-plan-behind-high-tea-production-3399926">
                                        Read More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-blog-item mt-30 wow animated fadeInUp"
                                data-wow-duration="3000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="thumb">
                                    <img src={blogThree} alt="" />
                                </div>
                                <div className="content">
                                    <div className="blog-meta">
                                        <ul>
                                            <li>July 10, 2023</li>
                                            <li>
                                                <a href="#">Bangladesh</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <h3 className="title">
                                        <a href="https://www.thedailystar.net/news/bangladesh/news/countrys-3rd-tea-auction-centre-open-panchagarh-3365601" target='_blank' referrerPolicy='no-referrer'>
                                            Country's 3rd tea auction centre to open in Panchagarh
                                        </a>
                                    </h3>
                                    <a href="https://www.thedailystar.net/news/bangladesh/news/countrys-3rd-tea-auction-centre-open-panchagarh-3365601" target='_blank' referrerPolicy='no-referrer'>
                                        Read More <i className="fal fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHomeOne;
