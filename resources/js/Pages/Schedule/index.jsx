import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import { Head } from '@inertiajs/react';
import SaleProgramme from './SaleProgramme';

function Schedule({ schedule }) {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Head title='Sale Programme' />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Sale Programme"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/schedule', title: 'Sale Programme' },
                ]}
            />
            <SaleProgramme schedule={schedule} />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Schedule;
