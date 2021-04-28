import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
    background: #fff;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImgWrap = styled.div`
    margin: 50px;
    max-width: 500px;
    margin-bottom: 0;
    padding-bottom: 0;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const NotFoundH1 = styled.h1`
    font-size: 36px;
`;

export const NotFoundLink = styled(Link)`
    margin-top: 10px;
    font-size: 24px;
    color: #11c0b9;
`;