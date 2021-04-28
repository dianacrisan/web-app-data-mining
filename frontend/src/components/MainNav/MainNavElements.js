import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom' //router

export const MainNavWrap = styled.nav`
    background: #111212;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: lrem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const MainNavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const MainNavLogo = styled(LinkR)`
    color: #fff;
    cursor: pointer;
    font-size: 1.5rem;
    position: absolute;
    top: 22px;
    left: 24px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MenuIcon=styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
`;