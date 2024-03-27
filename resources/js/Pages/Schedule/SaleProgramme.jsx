import { getSeason } from '@/utils';
import { Link } from '@inertiajs/react';
import { format } from 'date-fns';
import React from 'react';

function SaleProgramme({ schedule }) {
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
                                        Sale Programme
                                    </h3>
                                    <p>Here you will find the Panchagarh sale programme for season {season}.</p>
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


                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Sale No</th>
                                    <th>Catalogue Closing</th>
                                    <th>Sale Date</th>
                                    <th>Buyer Prompt</th>
                                    <th>Status</th>
                                    <th className='col-3'>Remark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {schedule.map((row, index) => (
                                    <tr key={index + JSON.stringify(row)}>
                                        <td>{row.sale_no}</td>
                                        <td>{format(row.catalogue_closing, "dd-MM-yyyy")}</td>
                                        <td>{format(row.sale_date, "dd-MM-yyyy")}</td>
                                        <td>{format(row.prompt_date, "dd-MM-yyyy")}</td>
                                        <td>
                                            <span className={`badge ${row.status == 'current' ? 'badge-success' : (row.status == 'closed' ? 'badge-secondary' : 'badge-info')} badge-pill text-capitalize`}>{row.status}</span>
                                        </td>
                                        <td className='text-sm text-start'>{row.remark}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SaleProgramme;
