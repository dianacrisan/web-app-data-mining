import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { VscClose } from 'react-icons/vsc'

export const MainMenuContainer = styled.aside`
    position: fixed;
    height: 100%;
    width: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    z-index: 999;
`;

export const CloseIcon = styled(VscClose)`
    color: #fff;
`;

export const Icon = styled.div`
    position: fixed;
    top: 32px;
    right: 32px;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const MainMenuWrapper = styled.div`
    color: #fff;
`;

export const MainMenuItems = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const MainMenuLink = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    list-style: none;   
    transition: 0.2s ease-in-out;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #11c0b9;
        transition: 0.2s ease-in-out;
    }
`;

export const MainMenuBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const MainMenuRoute = styled(LinkR)`
    border-radius: 50px;
    color: #010606;
    background: #11c0b9;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 16px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #010606;
        background: #fff;
    }
`;