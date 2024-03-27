import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import { Head } from '@inertiajs/react';
import TopPrices from './TopPrices';

function SaleReports(props) {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Head title='Auction Prices' />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Auction Prices"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/sale-reports', title: 'Auction Prices' },
                ]}
            />
            <TopPrices top_prices={props.top_prices} />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default SaleReports;
