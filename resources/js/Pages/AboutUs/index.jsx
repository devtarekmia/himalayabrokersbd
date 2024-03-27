import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeroAbout from './HeroAbout';
import TeamAbout from './TeamAbout';
import { Head } from '@inertiajs/react';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import ServicesAbout from './ServicesAbout';
import ServicesHomeTwo from '../HomeTwo/ServicesHomeTwo';

function AboutUs() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Head title='About' />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/about-us', title: 'About' },
                ]}
            />
            <HeroAbout />
            <ServicesHomeTwo />
            <ServicesAbout />
            <TeamAbout />
            <FooterHomeOne className="appie-footer-about-area" />
            <BackToTop />
        </>
    );
}

export default AboutUs;
