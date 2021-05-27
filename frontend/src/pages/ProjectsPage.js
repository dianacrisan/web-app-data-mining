import React, { useState } from 'react';
import MainMenu from '../components/MainMenu'
import MainNav from '../components/MainNav';
import DescriptionComponent from '../components/DescriptionComponent';
import { projectsDescription } from '../components/DescriptionComponent/Data'
import UploadFileSection from '../components/UploadFileSection'
import Footer from '../components/Footer';


const ProjectsPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <MainMenu isOpen={isOpen} toggle={toggle} />
            <MainNav toggle={toggle}/>
            <DescriptionComponent {...projectsDescription} />
            <UploadFileSection />
            <Footer />
        </>
    )
};

export default ProjectsPage;
