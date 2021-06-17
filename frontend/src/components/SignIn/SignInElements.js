import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: relative;
    height: 100vh;
    z-index: 0;
    overflow: hidden;
    background: #11c0b9;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 480px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-top: 32px;
    margin-left: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-top: 8px;
        margin-left: 16px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    height: auto;
    width: 100%;
    max-width: 400px;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 44px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 480px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    color: #fff;
    margin-bottom: 25px;
`;

export const FormLabel = styled.label`
    font-size: 14px;
    color: #fff;
    margin-bottom: 8px;
`;

export const FormInput = styled.input`
    margin-bottom: 32px;
    padding: 16px 16px;
    border-radius: 4px;
    border: none;
`;

export const FormButton = styled.button`
    background: #11c0b9;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const FormText = styled(Link)`
    text-align: center;
    margin-top: 32px;
    color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
`;