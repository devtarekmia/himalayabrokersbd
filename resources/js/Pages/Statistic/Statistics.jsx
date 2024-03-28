import { Link, usePage } from '@inertiajs/react';
import React from 'react';

function Statistics() {
    const { season } = usePage().props;
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title mb-30 d-flex justify-between align-items-end">
                                <div>
                                    <h3 className="appie-title">
                                        Statistics
                                    </h3>
                                    <p>Here you will find the statistical reports for season {season}.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='appie-single-service
                                    text-center
                                    wow
                                    animated
                                    fadeInUp
                                    bg-white'
                        data-wow-duration="2000ms"
                        data-wow-delay="200ms"
                    >


                        <h1>Coming Soon ...</h1>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Statistics;
