import { FluentMdl2ProductList } from '@/Components/Icons/FluentMdl2ProductList';
import { OuiAppReporting } from '@/Components/Icons/OuiAppReporting';
import { StreamlineMoneyGraphAnalyticsBusinessProductGraphDataChartAnalysis } from '@/Components/Icons/StreamlineMoneyGraphAnalyticsBusinessProductGraphDataChartAnalysis';
import { UimCalender } from '@/Components/Icons/UimCalender';
import { Link } from '@inertiajs/react';
import React from 'react';

function ServicesHomeOne({ className }) {
    return (
        <section className={`appie-service-area pt-90 pb-100 ${className}`} id="service">
            <div className="container">

                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <Link href='/schedule'>
                            <div
                                className="appie-single-service text-center mt-30 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="200ms"
                            >
                                <div className="icon">
                                    <UimCalender className="text-white" style={{ fontSize: '2.5rem' }} />
                                </div>
                                <h4 className="appie-title">Sale Programme</h4>
                                <p>View the sale programme for season 2024/25.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href='/catalogue'>
                            <div
                                className="appie-single-service text-center mt-30 item-2 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="400ms"
                            >
                                <div className="icon">
                                    <FluentMdl2ProductList className="text-white" style={{ fontSize: '2.5rem' }} />
                                </div>
                                <h4 className="appie-title">Our Catalogues</h4>
                                <p>View our tea catalogues for the e-auction.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href='/sale-reports'>
                            <div
                                className="appie-single-service text-center mt-30 item-3 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="600ms"
                            >
                                <div className="icon">
                                    <StreamlineMoneyGraphAnalyticsBusinessProductGraphDataChartAnalysis className="text-white" style={{ fontSize: '2rem' }} />
                                </div>
                                <h4 className="appie-title">Auction Prices</h4>
                                <p>View our auction prices and related information.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <Link href='/statistics'>
                            <div
                                className="appie-single-service text-center mt-30 item-4 wow animated fadeInUp"
                                data-wow-duration="2000ms"
                                data-wow-delay="800ms"
                            >
                                <div className="icon">
                                    <OuiAppReporting className="text-white" style={{ fontSize: '2.5rem' }} />
                                </div>
                                <h4 className="appie-title">Statistics</h4>
                                <p>Mucker plastered bugger all mate morish are.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHomeOne;
