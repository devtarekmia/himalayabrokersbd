import { usePage } from '@inertiajs/react';
import React from 'react';
import Chart from 'react-google-charts';

function AboutHomeEight() {
    const { sale } = usePage().props
    const current_sale = sale.data;
    const { overview } = current_sale;

    const leaf_offering = parseFloat(overview.offering_kgs_leaf);
    const leaf_sold = parseFloat(overview.sold_kgs_leaf);
    const dust_offering = parseFloat(overview.offering_kgs_dust);
    const dust_sold = parseFloat(overview.sold_kgs_dust);

    const leaf_data = [
        ["Leaf", "Weight (kg)"],
        ["Sold", leaf_sold],
        ["Unsold", leaf_offering - leaf_sold],
    ];

    const dust_data = [
        ["Dust", "Weight (kg)"],
        ["Sold", dust_sold],
        ["Unsold", dust_offering - dust_sold],
    ]


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
                                    <h4 className="appie-section-title-2 mt-2">{current_sale.season}</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mt-30 mt-md-0'>
                                    <p>Sale No</p>
                                    <h4 className="appie-section-title-2 mt-2">{current_sale.sale_no}</h4>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mt-30 mt-md-0'>
                                    <p>Sale Date</p>
                                    <h4 className="appie-section-title-2 mt-2">{current_sale.sale_date}</h4>
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
                                            <td><p><strong>Brokens</strong></p></td>
                                            <td><p>{current_sale.top_prices.brokens.mark}</p></td>
                                            <td><p>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'BDT' }).format(current_sale.top_prices.brokens.price)} </p></td>
                                            <td><p>{current_sale.top_prices.brokens.grade} </p></td>
                                        </tr>
                                        <tr>
                                            <td><p><strong>Fannings</strong></p></td>
                                            <td><p>{current_sale.top_prices.fannings.mark}</p></td>
                                            <td><p>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'BDT' }).format(current_sale.top_prices.fannings.price)} </p></td>
                                            <td><p>{current_sale.top_prices.fannings.grade} </p></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4">
                                                <h4 className='appie-title'>Dust</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><p><strong>Dust</strong></p></td>
                                            <td><p>{current_sale.top_prices.dust.mark}</p></td>
                                            <td><p>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'BDT' }).format(current_sale.top_prices.dust.price)} </p></td>
                                            <td><p>{current_sale.top_prices.dust.grade} </p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='appie-single-service appie-single-services-3 mt-30  wow  animated fadeInUp bg-white '>

                                <h3 className="title">
                                    Sale Overview
                                </h3>
                                <p>
                                    Relating to our catalouge only
                                </p>

                                <div className='mt-35'>
                                    <Chart
                                        chartType="PieChart"
                                        data={leaf_data}
                                        options={{
                                            title: 'LEAF', chartArea: { left: 15, top: 15, right: 15, bottom: 15 }
                                        }}
                                        width={"100%"}
                                    />
                                </div>
                                <div className='mt-30'>
                                    <Chart
                                        chartType="PieChart"
                                        data={dust_data}
                                        options={{
                                            title: 'DUST', chartArea: { left: 15, top: 15, right: 15, bottom: 15 }
                                        }}
                                        width={"100%"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default AboutHomeEight;
