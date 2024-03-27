import React, { useEffect } from 'react';
import useToggle from '../../Hooks/useToggle';
import StickyMenu from '../../lib/StickyMenu';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne';
import Drawer from '../Mobile/Drawer';
import DetailsService from './DetailsService';
import { Head } from '@inertiajs/react';
import HeroNews from '../News/HeroNews';
import HeaderNews from '../News/HeaderNews';

function Service() {
    useEffect(() => {
        StickyMenu();
    });
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Head title='Service' />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Our Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/service', title: 'Service' },
                ]}
            />
            <DetailsService />
            <ProjectHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Service;
