import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeOne from '../HomeOne/FooterHomeOne';
import Drawer from '../Mobile/Drawer';
import HeaderNews from '../News/HeaderNews';
import HeroNews from '../News/HeroNews';
import Forms from './Forms';
import { Head } from '@inertiajs/react';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Head title='Contact' />
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderNews drawer={drawer} action={drawerAction.toggle} />
            <HeroNews
                title="Contact Us"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { link: '/contact', title: 'Contact' },
                ]}
            />
            <Forms />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default Contact;
