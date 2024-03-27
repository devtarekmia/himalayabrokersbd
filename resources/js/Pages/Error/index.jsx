import React from 'react';
import { Head } from '@inertiajs/react';
import error404 from '@images/error/404.gif';
import error403 from '@images/error/403.gif';
import error503 from '@images/error/503.gif';
import error500 from '@images/error/500.gif';

function ErrorPage({ status }) {

    const title = {
        503: 'Service Unavailable',
        500: 'Server Error',
        404: 'Page Not Found',
        403: 'Forbidden',
    }[status]

    const adj = {
        503: 'Sorry!',
        500: 'Whoops!',
        404: 'Sorry!',
        403: 'Sorry!',
    }[status]

    const img = {
        503: error503,
        500: error500,
        404: error404,
        403: error403,
    }[status]

    const description = {
        503: 'We are doing some maintenance. Please check back soon.',
        500: 'Something went wrong on our servers.',
        404: 'The page you are looking for could not be found.',
        403: 'You are forbidden from accessing this page.',
    }[status]

    const goBack = (e) => {
        e.preventDefault();
        history.back();
    };
    return (
        <>
            <Head title={adj} />
            <div className="appie-error-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="appie-error-content text-center">
                                <img src={img} alt="" />
                                <span>{adj}</span>
                                <h3 className="title">{title}</h3>
                                <p>
                                    {description}
                                </p>
                                <a onClick={(e) => goBack(e)} href="#">
                                    <i className="fal fa-arrow-left mr-2"></i>Go Back
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ErrorPage;
