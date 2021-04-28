import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { VscThreeBars } from 'react-icons/vsc';
import { Nav, NavbarContainer, NavLogo, MenuIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn } from './NavbarElements';

const Navbar = ({toggle}) => {

    const toggleTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleTop}>dmc</NavLogo>
                    <MenuIcon onClick={toggle}>
                        <VscThreeBars />
                    </MenuIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" offset={-80}
                            smooth={true} duration ={400} spy={true} exact='true'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" offset={-80}
                            smooth={true} duration ={400} spy={true} exact='true'
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="learn" offset={-80}
                            smooth={true} duration ={400} spy={true} exact='true'
                            >Learn</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
};

export default Navbar;
