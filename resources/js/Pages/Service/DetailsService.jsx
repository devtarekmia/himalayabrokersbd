import React from 'react';
import thumb from '@images/service-details-thumb.jpg';

function DetailsService() {
    return (
        <>
            <section className="appie-service-details-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="service-details-sidebar mr-50">
                                <div className="service-category-widget">
                                    <ul>
                                        <li>
                                            <i className="fal fa-home"></i>Tea Brokers & Auctioneers
                                        </li>
                                        <li>
                                            <i className="fal fa-badge-check"></i>Tea Tasting
                                        </li>
                                        <li>
                                            <i className="fal fa-forklift"></i>Storage & Logistics
                                        </li>
                                        <li>
                                            <i className="fal fa-globe-asia"></i>Business Networking
                                        </li>
                                        <li>
                                            <i className="fal fa-industry"></i>Financial Assistance
                                        </li>
                                    </ul>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-download"></i>
                                        <span>Download docs</span>
                                    </a>
                                </div>
                                <div className="service-download-widget">
                                    <a href="#">
                                        <i className="fal fa-file-pdf"></i>
                                        <span>Characteristics</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <div className="thumb">
                                    <img src={thumb} alt="" />
                                </div>
                                <div className="content">
                                    <h3 className="title">Tea Brokers & Auctioneers</h3>
                                    <p>
                                        Tea broking in Panchagarh has developed over its long history from a pure marketing role to a multi faceted range of services covering not only marketing but warehousing, finance, technical advisory service and the macro aspects of the global tea industry. Consequently, a number of integrated businesses and professional expertise for these different areas of operation are required in a tea broking company. Eastern Brokers have lost no time in staying abreast with these developing trends and will continue to do so in the future. Proud of yesterday we build for tomorrow.
                                    </p>
                                </div>
                                <div className="content">
                                    <h3 className="title">Tea Tasting</h3>
                                    <p>
                                        Our team is comprised of competent Tea Tasters – a young and dynamic team who were all trained by the most Senior Tea Broker and veteran in the trade, who spared no effort in doing so.
                                    </p>
                                    <span>
                                        It is the Taster who describes and values tea and so fulfills the highly specialized responsibility in its marketing aspects.
                                    </span>
                                    <p>
                                        His description of the liquor is based on taste. Smell and taste are part of the same interconnected sensory system, and "flavor" is almost entirely sensed in the nose. A Taster may deal with several hundred tea samples in a day and mastering this highly complex skill is an accomplishment our team can proudly boast of. In making his evaluation, he brings his knowledge and experience to bear on the performance of a particular estate and mark and to this extent one can be assured of our high competency levels.
                                    </p>
                                </div>
                                <div className="content">
                                    <h3 className="title">Storage & Logistics</h3>
                                    <p>
                                        Our Warehouse is securely located in Panchagarh and has easy access from the main Panchagarh-Tetulia main road. It currently has a capacity of 22,000 sq ft.
                                    </p>
                                    <br />
                                    <p>
                                        The complex is managed and supervised by a Team of customer oriented and experienced Staff at site. The facility is approved by the Bangladesh Tea Board and the Tea Traders’ Association and is in strict compliance with Industry standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DetailsService;
