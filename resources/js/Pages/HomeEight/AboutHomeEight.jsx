import { getSeason } from '@/utils';
import React from 'react';

function AboutHomeEight({ current_sale_prices }) {
    const season = getSeason();
    console.log(current_sale_prices)
    return (
        <>
            <section className="appie-about-8-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title mb-30">
                                <h3 className="appie-title">
                                    This sale at a glance.
                                </h3>
                                <p>We ensure organized and transparent marketing and sale of teas.</p>
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
                        <div className="row">

                            <div className="col-md-4">
                                <div className='mt-30 mt-md-0'>
                                    <p>Season</p>
                                    <h4 className="appie-section-title-2 mt-2">{season}</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mt-30 mt-md-0'>
                                    <p>Sale No</p>
                                    <h4 className="appie-section-title-2 mt-2">13</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mt-30 mt-md-0'>
                                    <p>Sale Date</p>
                                    <h4 className="appie-section-title-2 mt-2">March 20, 2024</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-30">
                        <div className="col-lg-7">
                            <div className='appie-single-service appie-single-services-3 mt-30  wow  animated fadeInUp bg-white '>
                                <h3 className="title">
                                    Top price realized
                                </h3>
                                <p>
                                    Relating to our catalouge only
                                </p>
                                <br /><br /><br />
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Tea Type</th>
                                            <th>Mark</th>
                                            <th>Sold at</th>
                                            <th>Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="4">
                                                <h4 className='appie-title'>Leaf</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><div><p><strong>Brokens</strong></p></div></td>
                                            <td><div><p>KBSSL TEA</p></div></td>
                                            <td><div><p>125.00 </p></div></td>
                                            <td><div><p>BOP(C) </p></div></td>
                                        </tr>
                                        <tr>
                                            <td><div><p><strong>Fannings</strong></p></div></td>
                                            <td><div><p>KBSSL TEA</p></div></td>
                                            <td><div><p>125.00 </p></div></td>
                                            <td><div><p>OF(C) </p></div></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4">
                                                <h4 className='appie-title'>Dust</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><div><p><strong>Dust</strong></p></div></td>
                                            <td><div><p>POPULAR TEA</p></div></td>
                                            <td><div><p>90.00 </p></div></td>
                                            <td><div><p>CD(C) </p></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='appie-single-service appie-single-services-3 mt-30  wow  animated fadeInUp bg-white '>
                                <h3 className="title">
                                    Sale Insights
                                </h3>
                                <p>
                                    Relating to our catalouge only
                                </p>
                                <br /><br /><br />
                                <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Offering</th>
                                            <th>Sales</th>
                                            <th>Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="3">
                                                <h4 className='appie-title'>Leaf</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><div><p>20,438.50 KGs</p></div></td>
                                            <td><div><p>17,946.00 KGs </p></div></td>
                                            <td><div><p>87.80% </p></div></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="3">
                                                <h4 className='appie-title'>Dust</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><div><p>1,497.60 KGs</p></div></td>
                                            <td><div><p>1,497.60 KGs </p></div></td>
                                            <td><div><p>100% </p></div></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutHomeEight;
