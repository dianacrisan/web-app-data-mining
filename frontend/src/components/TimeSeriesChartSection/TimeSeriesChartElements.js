import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    width: 100%;
    background: ${({lightBg}) => (lightBg ? '#bdc9c9' : '#111212')};
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        padding: 20px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    margin-top: 140px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

`;

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #11c0b9;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 16px;
    letter-spacing: 1.4px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Description = styled.p`
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;