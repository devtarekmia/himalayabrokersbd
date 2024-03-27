import React from 'react';

function ServicesAbout() {
    return (
        <>
            <section className="appie-services-2-area pt-90 pb-55" id="service">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">We’re driven by our values</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-hammer"></i>
                                </div>
                                <h4 className="title">Tea Brokers & Auctioneers</h4>
                                <p>We're an intermediary between tea producers and buyers. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-badge-check"></i>
                                </div>
                                <h4 className="title">Tea Tasting</h4>
                                <p>As part of our tea tasting service, we provide expert evaluations to ensure the consistency of quality and flavor.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-forklift"></i>
                                </div>
                                <h4 className="title">Storage & Logistics</h4>
                                <p>Most of the major tea estates that participate in the Panchagarh Tea Auctions store their produce through our Tea Warehousing arm.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-4 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-globe-asia"></i>
                                </div>
                                <h4 className="title">Business Networking</h4>
                                <p>Our business networking service connects you with industry leaders to facilitate growth.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-5 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-business-time"></i>
                                </div>
                                <h4 className="title">Consultancy</h4>
                                <p>Among other things, we provide consultancy services related to market trends, tea manufacturing, business networking, and storage logistics.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 appie-single-service-about item-6 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i className="fal fa-industry"></i>
                                </div>
                                <h4 className="title">Financial Assistance</h4>
                                <p>We are always there for our producers in times of need, offering them financial assistance if they need it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesAbout;
