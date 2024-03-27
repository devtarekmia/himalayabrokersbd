import React, { useEffect } from 'react';
import logo from '@images/logo.png';
import StickyMenu from '../../lib/StickyMenu';
import Navigation from '../Navigation';
import { Link } from '@inertiajs/react';

function HeaderHomeFour({ action, canLogin, auth }) {
    useEffect(() => {
        StickyMenu();
    }, []);
    return (
        <>
            <header className="appie-header-area appie-header-4-area appie-sticky">
                <div className="container">
                    <div className="header-nav-box header-nav-box-5">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-4 col-sm-5 col-6 order-1 order-sm-1">
                                <div className="appie-logo-box">
                                    <Link href="/">
                                        <img src={logo} alt="Himalaya Brokers Limited" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-sm-1 order-3 order-sm-2">
                                <div className="appie-header-main-menu">
                                    <Navigation />
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-7 col-sm-6 col-6 order-2 order-sm-3">
                                <div className="appie-btn-box text-right">
                                    {auth.user ? (
                                        <Link href={route('dashboard')} className="login-btn"><i className="fal fa-user"></i> Dashboard</Link>
                                    ) : (canLogin && <Link href="/login" className="login-btn"><i className="fal fa-user"></i> Login</Link>)}

                                    <Link href="/contact" className="main-btn ml-30">Get Started</Link>
                                    <div
                                        onClick={(e) => action(e)}
                                        className="toggle-btn ml-30 canvas_open d-lg-none d-block"
                                    >
                                        <i className="fa fa-bars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default HeaderHomeFour;
