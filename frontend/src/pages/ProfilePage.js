import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';


const ProfilePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MainMenu isOpen={isOpen} toggle={toggle} />
            <MainNav toggle={toggle}/>
            <h1>PROFILE</h1>
            
            <Footer/>
        </>
    )
};

export default ProfilePage;
