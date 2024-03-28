import { Link, usePage } from '@inertiajs/react';
import { formatRelative, parseISO } from 'date-fns';
import { enIN } from 'date-fns/locale'
import React from 'react';

function CatalogueList() {
    const { catalogue, season } = usePage().props;

    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="appie-section-title mb-30">
                                <h3 className="appie-title">
                                    Our catalogue
                                </h3>
                                <p>We have listed our catalogues for season {season} below.</p>
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
                        <table className='table table-bordered table-responsive-lg text-nowrap'>
                            <thead className='table-sm'>
                                <tr>
                                    <th rowSpan={2} className='align-middle'>Sale No</th>
                                    <th rowSpan={2} className='align-middle col-1'>Sale Date</th>
                                    <th rowSpan={2} className='align-middle'>Status</th>
                                    <th colSpan={2}>Leaf</th>
                                    <th colSpan={2}>Dust</th>
                                    <th rowSpan={2} className='align-middle col-3'>Catalogue</th>
                                </tr>
                                <tr>
                                    <th>Bags</th>
                                    <th>KGs</th>
                                    <th>Bags</th>
                                    <th>KGs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {catalogue.map((schedule) => (
                                    <React.Fragment key={schedule.id}>
                                        {schedule.catalogue && (
                                            <tr>
                                                <td>{schedule.sale_no}</td>
                                                <td>
                                                    <div>{formatRelative(parseISO(schedule.sale_date), new Date(), { locale: enIN })}</div>
                                                </td>
                                                <td>
                                                    <span className={`badge ${schedule.status == 'current' ? 'badge-success' : (schedule.status == 'closed' ? 'badge-secondary' : 'badge-info')} badge-pill text-capitalize`}>{schedule.status}</span>
                                                </td>
                                                <td >{schedule.catalogue.offering_bags_leaf}</td>
                                                <td className='text-right'>{new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(schedule.catalogue.offering_kgs_leaf)}</td>
                                                <td>{schedule.catalogue.offering_bags_dust}</td>
                                                <td className='text-right'>{new Intl.NumberFormat('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(schedule.catalogue.offering_kgs_dust)}</td>
                                                <td><a href={schedule.catalogue.catalogue_file} download> <i className='fal fa-file-pdf mr-2' style={{ color: 'red' }}></i> {schedule.catalogue.catalogue_file_name}</a></td>
                                            </tr>
                                        )}
                                        {!schedule.catalogue && (
                                            <tr>
                                                <td>{schedule.sale_no}</td>
                                                <td>
                                                    <div>{formatRelative(parseISO(schedule.sale_date), new Date(), { locale: enIN })}</div>
                                                </td>
                                                <td>
                                                    <span className={`badge ${schedule.status == 'current' ? 'badge-success' : (schedule.status == 'closed' ? 'badge-secondary' : 'badge-info')} badge-pill text-capitalize`}>{schedule.status}</span>
                                                </td>
                                                <td colSpan={5} className='font-italic'>Upcoming Sale</td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CatalogueList;
