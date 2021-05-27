import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

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
            <h1>DATA MINING EXPLAINED - STATIC PAGE</h1>
            <Footer />
        </>
    )
};

export default MainPage;
