import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import DescriptionComponent from '../components/DescriptionComponent';
import { dataAnalysisDescription } from '../components/DescriptionComponent/Data'
import Footer from '../components/Footer';


const DataAnalysisPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MainMenu isOpen={isOpen} toggle={toggle} />
            <MainNav toggle={toggle}/>
            <DescriptionComponent {...dataAnalysisDescription} />
            <Footer />
        </>
    )
};

export default DataAnalysisPage;
