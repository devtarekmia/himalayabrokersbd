import React from 'react';
import serviceThumb from '@images/service-thumb-1.png';

function ServicesHomeEight() {
    return (
        <>
            <section
                className="appie-services-2-area appie-services-8-area pt-90 pb-55"
                id="service"
            >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6 col-md-8">
                            <div className="appie-section-title">
                                <h3 className="appie-title">Grow your business with us.</h3>
                                <p>The aim is to ensure that our customers are fully satisfied by the product price, processes, quality, and choice of our tea. We want to be your tea broker.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-hammer" />
                                        </div>
                                        <h4 className="title">Tea Brokers & Auctioneers</h4>
                                        <p>
                                            We're an intermediary between tea producers and buyers.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-2
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="400ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-badge-check" />
                                        </div>
                                        <h4 className="title">Tea Tasting</h4>
                                        <p>
                                            We provide expert evaluations to ensure the consistency of quality and flavor.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-3
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="600ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-forklift" />
                                        </div>
                                        <h4 className="title">Storage & Logistics</h4>
                                        <p>
                                            We provide a Tea Warehouse facility for producers to participate in the Panchagarh Tea Auctions.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="
                    appie-single-service-2 appie-single-service-about
                    item-4
                    mt-30
                    wow
                    animated
                    fadeInUp
                  "
                                        data-wow-duration="2000ms"
                                        data-wow-delay="200ms"
                                    >
                                        <div className="icon">
                                            <i className="fal fa-globe-asia" />
                                        </div>
                                        <h4 className="title">Business Networking</h4>
                                        <p>
                                            Our business networking service connects you with industry leaders to facilitate growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="service-thumb">
                                <img src={serviceThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeEight;
