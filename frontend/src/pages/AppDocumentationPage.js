import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import FooterMain from '../components/FooterMain';
import DescriptionComponent from '../components/DescriptionComponent';
import { aboutAppDescription } from '../components/DescriptionComponent/Data'

const AppDocumentationPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MainMenu isOpen={isOpen} toggle={toggle} />
            <MainNav toggle={toggle}/>
            <DescriptionComponent {...aboutAppDescription} />

            <FooterMain />
        </>
    )
};

export default AppDocumentationPage;
