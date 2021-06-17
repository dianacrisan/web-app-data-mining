import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import FooterMain from '../components/FooterMain';
import DescriptionComponent from '../components/DescriptionComponent';
import { profileDescription } from '../components/DescriptionComponent/Data'

const ProfilePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MainMenu isOpen={isOpen} toggle={toggle} />
            <MainNav toggle={toggle}/>
            <DescriptionComponent {...profileDescription} />         
            <FooterMain/>
        </>
    )
};

export default ProfilePage;
