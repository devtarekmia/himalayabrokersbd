import { Head } from '@inertiajs/react';
import HomeOne from './HomeOne';

export default function Welcome({ faqs, auth, canLogin }) {
    return (
        <>
            <Head title="Welcome" />
            <HomeOne faqs={faqs} canLogin={canLogin} auth={auth} />
        </>
    );
}
