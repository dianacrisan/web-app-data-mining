import React from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import { Nav, NavbarContainer, NavLogo, MenuIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn } from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">dmc</NavLogo>
                    <MenuIcon onClick={toggle}>
                        <VscThreeBars />
                    </MenuIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="learn">Learn</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
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
