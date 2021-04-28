import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeAboutObject, homeDiscoverObject, homeLearnObject } from '../components/InfoSection/Data';
import Footer from '../components/Footer';

const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeAboutObject}/>
            <InfoSection {...homeDiscoverObject}/>
            <InfoSection {...homeLearnObject}/>
            <Footer />
        </>
    )
}

export default HomePage;
