import React from 'react';
import { FooterContainer, FooterWrap, FooterDataTitle, FooterData } from './FooterMainElements'

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
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
