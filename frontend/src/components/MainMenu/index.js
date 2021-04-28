import React from 'react';
import { MainMenuItems, MainMenuContainer, MainMenuWrapper, Icon, CloseIcon, MainMenuBtnWrap, MainMenuLink, MainMenuRoute } from './MainMenuElements'

const MainMenu = ({toggle, isOpen}) => {
    return (
        <MainMenuContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <MainMenuWrapper>
                <MainMenuItems>
                    <MainMenuLink to="" onClick={toggle}>
                        Data Mining Explained
                    </MainMenuLink>
                    <MainMenuLink to="" onClick={toggle}>
                        Understand Web Scraping
                    </MainMenuLink>
                    <MainMenuLink to="" onClick={toggle}>
                        Datafiles Management
                    </MainMenuLink>
                    <MainMenuLink to="" onClick={toggle}>
                        Data Reports
                    </MainMenuLink>
                    <MainMenuLink to="" onClick={toggle}>
                        Application Documentation
                    </MainMenuLink>
                    <MainMenuLink to="" onClick={toggle}>
                        Profile Information
                    </MainMenuLink>
                </MainMenuItems>
                <MainMenuBtnWrap>
                    <MainMenuRoute to="/">
                        Log Out
                    </MainMenuRoute>
                </MainMenuBtnWrap>
            </MainMenuWrapper>
        </MainMenuContainer>
    )
};

export default MainMenu;
