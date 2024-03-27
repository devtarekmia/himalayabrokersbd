import React from 'react';
import workThumb from '@images/how-it-work-thumb.png';

function WorkPartHomeEight() {
    return (
        <>
            <div className="appie-how-it-work-area pt-10 pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="how-it-work-thumb text-center">
                                <img src={workThumb} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="appie-how-it-work-content">
                                <h2 className="title">Just a few steps</h2>
                                <p>
                                    E-auction participation requires a valid Tea License and membership in the respective Tea Traders Association.
                                </p>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>1</span>
                                            <h5 className="title">
                                                Get a valid <br />
                                                Tea License
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>2</span>
                                            <h5 className="title">
                                                Become a member <br />
                                                of STGOTTAB
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>3</span>
                                            <h5 className="title">
                                                Participate in <br />
                                                the e-auction
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="how-it-work-box">
                                            <span>4</span>
                                            <h5 className="title">
                                                Grow your <br />
                                                business with us
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WorkPartHomeEight;
