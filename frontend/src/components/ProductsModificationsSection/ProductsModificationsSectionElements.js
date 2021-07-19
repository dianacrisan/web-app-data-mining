import styled from 'styled-components';
import { MdClose } from 'react-icons/md';


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

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Button = styled.button`
    border-radius: 50px;
    background: #11c0b9;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

// modal elements
export const Background = styled.div`
  background: #000;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px ;
  background: #000;
  width: 700px;
  top: 50px;
  height: 80vh !important;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-radius: 10px;
  z-index: 10;

  @media screen and (max-width: 768px) {
        width: 400px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center !important;
  align-items: center !important;
  line-height: 1.8rem;
  font-size: 16px;
  color: #fff;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  width: 32px;
  height: 32px;
  top: 20px;
  right: 20px;
  padding: 0;
  z-index: 10;
`;