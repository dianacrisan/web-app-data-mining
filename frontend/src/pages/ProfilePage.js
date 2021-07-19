import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import FooterMain from '../components/FooterMain';
import DescriptionComponent from '../components/DescriptionComponent';
import { profileDescription } from '../components/DescriptionComponent/Data'
import UpdateInfoComponent from '../components/UpdateInfoComponent';
import { updateInfoDescription } from '../components/UpdateInfoComponent/Data';
import ProfileInfoCard from '../components/ProfileInfoCard';
import { InfoWrapper, InfoContainer } from '../components/DescriptionComponent/DescriptionComponentElements';

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
            <UpdateInfoComponent {...updateInfoDescription}/> 
            <InfoContainer lightBg={true}>
                <InfoWrapper>
                    <ProfileInfoCard />     
                </InfoWrapper>
            </InfoContainer>
            <FooterMain/>
        </>
    )
};

export default ProfilePage;
