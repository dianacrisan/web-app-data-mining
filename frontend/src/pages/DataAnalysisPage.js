import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import DescriptionComponent from '../components/DescriptionComponent';
import { dataAnalysisDescription } from '../components/DescriptionComponent/Data'
import FooterMain from '../components/FooterMain';
import TimeSeriesChartSection from '../components/TimeSeriesChartSection';
import { timeSeriesDescription } from '../components/TimeSeriesChartSection/Data'


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
            <TimeSeriesChartSection {...timeSeriesDescription} />
            <FooterMain />
        </>
    )
};

export default DataAnalysisPage;
