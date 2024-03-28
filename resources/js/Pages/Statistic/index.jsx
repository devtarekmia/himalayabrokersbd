import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import { Head } from '@inertiajs/react';
import Statistics from './Statistics';

function Statistic() {

    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Head title='Statistics' />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Statistics"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/statistics', title: 'Statistics' },
                ]}
            />
            <Statistics />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Statistic;
