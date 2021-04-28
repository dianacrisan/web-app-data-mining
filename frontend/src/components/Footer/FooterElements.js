import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterDataTitle = styled.h1`
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    margin-bottom: 16px;
    margin-top: 32px;
`;

export const FooterData = styled.h2`
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin-top: 30px;
    text-decoration: none;
    font-size: 16px;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    text-align: left;
    flex-direction: column;
    align-items: flex-start;
    margin: 55px;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 20px;
`;

export const FooterLinkScroll = styled(LinkS)`
    margin-bottom: 0.5rem;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        color: #11c0b9;
        transition: 0.3s ease-in-out;
    }
`;

export const FooterLink = styled.a`
    margin-bottom: 0.5rem;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        color: #11c0b9;
        transition: 0.3s ease-in-out;
    }
`;