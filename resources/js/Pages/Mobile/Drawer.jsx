import React, { useState } from 'react';
import logo from '@images/logo.png';
import { Link } from '@inertiajs/react';

function Drawer({ drawer, action }) {
    const [itemSize, setSize] = useState('0px');
    const [item, setItem] = useState('home');
    const handler = (e, value) => {
        e.preventDefault();
        const getItems = document.querySelectorAll(`#${value} li`).length;
        if (getItems > 0) {
            setSize(`${43 * getItems}px`);
            setItem(value);
        }
    };
    return (
        <>
            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={`offcanvas_menu_wrapper ${drawer ? 'active' : ''}`}>
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                                <div className="offcanvas-brand text-center mb-40">
                                    <img src={logo} alt="" />
                                </div>
                                <div id="menu" className="text-left ">
                                    <ul className="offcanvas_main_menu">

                                        <li
                                            onClick={(e) => handler(e, 'home')}
                                            id="home"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'about-us')}
                                            id="about-us"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/about-us">About</Link>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'service')}
                                            id="service"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/service">Service</Link>
                                        </li>

                                        <li
                                            onClick={(e) => handler(e, 'auction')}
                                            id="auction"
                                            className="menu-item-has-children active"
                                        >
                                            <span className="menu-expand">
                                                <i className="fa fa-angle-down"></i>
                                            </span>
                                            <a href="#">Auction</a>
                                            <ul
                                                className="sub-menu"
                                                style={{
                                                    height: item === 'auction' ? itemSize : '0px',
                                                }}
                                            >
                                                <li>
                                                    <Link href="/schedule">Sale Programme</Link>
                                                </li>
                                                <li>
                                                    <Link href="/catalogue">Catalogue</Link>
                                                </li>
                                                <li>
                                                    <Link href="/sale-reports">Auction Prices</Link>
                                                </li>
                                                <li>
                                                    <Link href="/statistics">Statistics</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li
                                            onClick={(e) => handler(e, 'contact')}
                                            id="contact"
                                            className="menu-item-has-children active"
                                        >
                                            <Link href="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="mailto:himalayabrokersltd@gmail.com">
                                                <i className="fal fa-envelope"></i>{' '}
                                                himalayabrokersltd@gmail.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="tel:+8801710035629">
                                                <i className="fal fa-phone"></i>  +(880) 1710 035629
                                            </a>
                                            <a href="tel:+8801733145359">
                                                <i className="fal fa-phone"></i>  +(880) 1733 145359
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://maps.app.goo.gl/2vxz2EW5t8NhXqgDA" target='_blank' referrerPolicy='no-referrer'>
                                                <i className="fal fa-map-marker-alt"></i> Plot No. 7887, M.R. College Road, Panchagarh, Bangladesh.
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drawer;
