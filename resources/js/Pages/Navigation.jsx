import { Link } from '@inertiajs/react';
import React from 'react';

function Navigation() {
    return (
        <>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about-us">About</Link>
                </li>
                <li>
                    <Link href="/service">Service</Link>
                </li>

                <li>
                    <a href="#">
                        Auction <i className="fal fa-angle-down" />
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <Link href="/schedule">Sale Programme</Link>
                        </li>
                        <li>
                            <Link href="/catalogue">Catalogue</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    );
}

export default Navigation;
