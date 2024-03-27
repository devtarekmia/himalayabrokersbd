import React from 'react';

function ServicesHomeTwo({ className }) {
    return (
        <>
            <section className={`appie-services-2-area pt-100 pb-100 ${className}`} id="service">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-bolt" />
                                </div>
                                <h4 className="title">Our Vision
                                </h4>
                                <p>
                                    Whilst meeting the needs of the Industry to emerge as a long sustaining, reliable, robust and leading Tea Auctioning House where we create value for all our stakeholders.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-2 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-home" />
                                </div>
                                <h4 className="title">Our Mission</h4>
                                <p>
                                    To profitably grow a healthy portfolio of business partners through our specialized market insights, where we co-create value and thus build sustainable relationships.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="appie-single-service-2 item-3 mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <i className="fas fa-link" />
                                </div>
                                <h4 className="title">Our Values
                                </h4>
                                <p>
                                    Our growth aspirations will be driven by integrity, commitment, and accountability. The values we hold and our people-centric culture will also guide us along this path of inclusive growth.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default ServicesHomeTwo;
