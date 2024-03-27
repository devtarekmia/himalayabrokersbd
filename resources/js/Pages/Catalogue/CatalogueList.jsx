import { getSeason } from '@/utils';
import { Link } from '@inertiajs/react';
import React from 'react';

function CatalogueList() {
    const season = getSeason();

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
                        <table className='table table-bordered table-responsive'>
                            <thead>
                                <tr>
                                    <th>Sale No</th>
                                    <th>Sale Date</th>
                                    <th>Leaf</th>
                                    <th>Dust</th>
                                    <th>Catalogue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>03-03-2023</td>
                                    <td>45632.00 KGs</td>
                                    <td>45632.00 KGs</td>
                                    <td>
                                        <Link href='/'>HBL-Tea Catalogue for Sale-3 Panchagarh.pdf</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>03-03-2023</td>
                                    <td>45632.00 KGs</td>
                                    <td>45632.00 KGs</td>
                                    <td>
                                        <Link href='/'>HBL-Tea Catalogue for Sale-3 Panchagarh.pdf</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>03-03-2023</td>
                                    <td>45632.00 KGs</td>
                                    <td>45632.00 KGs</td>
                                    <td>
                                        <Link href='/'>HBL-Tea Catalogue for Sale-3 Panchagarh.pdf</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>03-03-2023</td>
                                    <td>45632.00 KGs</td>
                                    <td>45632.00 KGs</td>
                                    <td>
                                        <Link href='/'>HBL-Tea Catalogue for Sale-3 Panchagarh.pdf</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>03-03-2023</td>
                                    <td>45632.00 KGs</td>
                                    <td>45632.00 KGs</td>
                                    <td>
                                        <Link href='/'>HBL-Tea Catalogue for Sale-3 Panchagarh.pdf</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>03-03-2023</td>
                                    <td>45632.00 KGs</td>
                                    <td>45632.00 KGs</td>
                                    <td>
                                        <Link href='/'>HBL-Tea Catalogue for Sale-3 Panchagarh.pdf</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>03-03-2023</td>
                                    <td>45632.00 KGs</td>
                                    <td>45632.00 KGs</td>
                                    <td>
                                        <Link href='/'>HBL-Tea Catalogue for Sale-3 Panchagarh.pdf</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>01</td>
                                    <td>03-03-2023</td>
                                    <td>45632.00 KGs</td>
                                    <td>45632.00 KGs</td>
                                    <td>
                                        <Link href='/'>HBL-Tea Catalogue for Sale-3 Panchagarh.pdf</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CatalogueList;
