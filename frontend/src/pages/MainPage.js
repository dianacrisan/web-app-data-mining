import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import FooterMain from '../components/FooterMain';
// import DescriptionComponent from '../components/DescriptionComponent';
import InfoSection from '../components/InfoSection';
// import { dataMiningConceptsDescription } from '../components/DescriptionComponent/Data'
import { mainAcquiringStep, mainPreprocessingStep, mainAnalysisStept, mainVisualizationStep } from '../components/InfoSection/Data'

const MainPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            {/* din componente pune meniu stanga */}
            <MainMenu isOpen={isOpen} toggle={toggle} />
            <MainNav toggle={toggle}/>
            {/* <DescriptionComponent {...dataMiningConceptsDescription} /> */}
            <InfoSection {...mainAcquiringStep} />
            <InfoSection {...mainPreprocessingStep} />
            <InfoSection {...mainAnalysisStept} />
            <InfoSection {...mainVisualizationStep} />
            <FooterMain />
        </>
    )
};

export default MainPage;
