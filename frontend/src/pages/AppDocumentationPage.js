import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

const AppDocumentationPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MainMenu isOpen={isOpen} toggle={toggle} />
            <MainNav toggle={toggle}/>
            <h1>DOCUMENTATION - STATIC PAGE</h1>

            <Footer />
        </>
    )
};

export default AppDocumentationPage;
