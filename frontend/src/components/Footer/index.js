import React from 'react';
import { FooterContainer, FooterWrap, FooterDataTitle, FooterData, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLinkScroll, FooterLink } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterDataTitle>Bachelor's project created by Crișan Monica Diana.</FooterDataTitle>
                <FooterData>
                    Faculty of Cybernetics, Statistics and Economic Informatics<br/>
                    Bucharest University of Economic Studies<br/>
                    July 2021
                </FooterData>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About the Project</FooterLinkTitle>
                            <FooterLinkScroll to="about">How it works</FooterLinkScroll>
                            <FooterLinkScroll to="discover">Discover data mining</FooterLinkScroll>
                            <FooterLinkScroll to="learn">Learn something new</FooterLinkScroll>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About the Creator</FooterLinkTitle>
                            <FooterLink href="https://github.com/dianacrisan">GitHub</FooterLink>
                            <FooterLink href="https://www.linkedin.com/in/diana-cri%C8%99an-9b4253175/">LinkedIn</FooterLink>
                            <FooterLink href="https://www.facebook.com/profile.php?id=100014100393533">Facebook</FooterLink>
                            <FooterLink href="https://twitter.com/itsdianacrisan">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
