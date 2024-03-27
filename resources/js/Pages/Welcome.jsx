import { Head } from '@inertiajs/react';
import HomeOne from './HomeOne';

export default function Welcome({ faqs, auth, canLogin, sale_prices }) {
    return (
        <>
            <Head title="Welcome" />
            <HomeOne faqs={faqs} canLogin={canLogin} auth={auth} current_sale_prices={sale_prices} />
        </>
    );
}
