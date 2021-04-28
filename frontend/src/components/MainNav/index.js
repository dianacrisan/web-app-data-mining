import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { VscThreeBars } from 'react-icons/vsc';
import { MainNavWrap, MainNavContainer, MainNavLogo, MenuIcon } from './MainNavElements';

const MainNav = ({toggle}) => {

    const toggleTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <MainNavWrap>
                <MainNavContainer>
                    <MainNavLogo to="/main" onClick={toggleTop}>dmc</MainNavLogo>
                    <MenuIcon onClick={toggle}>
                        <VscThreeBars />
                    </MenuIcon>
                </MainNavContainer>
            </MainNavWrap>
        </>
    )
};

export default MainNav;
