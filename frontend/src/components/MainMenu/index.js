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
                    <MainMenuLink to="/main" onClick={toggle}>
                        Data Mining Explained
                    </MainMenuLink>
                    <MainMenuLink to="/projects" onClick={toggle}>
                        Projects
                    </MainMenuLink>
                    {/* <MainMenuLink to="/reports" onClick={toggle}>
                        Project Reports
                    </MainMenuLink> */}
                    <MainMenuLink to="/documentation" onClick={toggle}>
                        Abouth the App
                    </MainMenuLink>
                    <MainMenuLink to="/profile" onClick={toggle}>
                        Profile
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
