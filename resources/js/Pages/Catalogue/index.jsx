import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import { Head } from '@inertiajs/react';
import CatalogueList from './CatalogueList';

function Catalogue() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Head title='Catalogue' />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Catalogue"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/catalogue', title: 'Catalogue' },
                ]}
            />
            <CatalogueList />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Catalogue;
