import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import Drawer from '../Mobile/Drawer';
import BlogHomeOne from './BlogHomeOne';
import FaqHomeOne from './FaqHomeOne';
import FooterHomeOne from './FooterHomeOne';
import HomeOneHeader from './HomeOneHeader';
import ProjectHomeOne from './ProjectHomeOne';
import ServicesHomeOne from './ServicesHomeOne';
import TeamHomeOne from './TeamHomeOne';
import TestimonialHomeOne from './TestimonialHomeOne';
import ServicesHomeEight from '../HomeEight/ServicesHomeEight';
import AboutHomeEight from '../HomeEight/AboutHomeEight';
import WorkPartHomeEight from '../HomeEight/WorkPartHomeEight';
import HeroHomeFour from '../HomeFour/HeroHomeFour';

function HomeOne() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        < >
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HomeOneHeader action={drawerAction.toggle} />
            <HeroHomeFour />
            <ServicesHomeOne />
            <AboutHomeEight />
            <ServicesHomeEight />
            <WorkPartHomeEight />
            <TestimonialHomeOne />
            <TeamHomeOne />
            <FaqHomeOne />
            <BlogHomeOne />
            <ProjectHomeOne />
            <FooterHomeOne />
            <BackToTop />
        </>
    );
}

export default HomeOne;
