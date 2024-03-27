import { getSeason } from '@/utils';
import { Link } from '@inertiajs/react';
import React from 'react';

function TopPrices({ top_prices }) {
    const season = getSeason();
    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title mb-30 d-flex justify-between align-items-end">
                                <div>
                                    <h3 className="appie-title">
                                        Top Prices
                                    </h3>
                                    <p>Here you will find our top price realised list for season {season}.</p>
                                </div>
                                <div>
                                    <a href='#' className='main-btn'><i className='fal fa-download mr-3'></i>Download</a>
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


                        <table className='table table-bordered table-responsive'>
                            <thead>
                                <tr>
                                    <th>Sale No</th>
                                    <th>Tea Type</th>
                                    <th>Mark</th>
                                    <th>Sold Price</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                {top_prices.map((sale) => (
                                    <React.Fragment key={sale.id}>
                                        {sale.top_prices.map((price, index) => (
                                            <tr key={`${sale.id}-${price.id}`}>
                                                {index === 0 && (
                                                    <td rowSpan={sale.top_prices.length} >
                                                        {sale.sale_no}
                                                    </td>
                                                )}
                                                <td className='text-capitalize text-start'>{price.tea_type}</td>
                                                <td className='text-start'>{price.mark}</td>
                                                <td className='text-right'>{new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(price.price)}</td>
                                                <td >{price.grade}</td>
                                            </tr>
                                        ))}
                                        {sale.top_prices.length === 0 && (
                                            <tr>
                                                <td >{sale.sale_no}</td>
                                                <td colSpan="4">Upcoming Sale</td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                        <p className='text-right'>* Figures relating to our catalouge only.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TopPrices;
