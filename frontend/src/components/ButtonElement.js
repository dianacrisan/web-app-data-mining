import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#11c0b9' : '#101606')};
    padding: ${({big}) => (big ? '14px 48 px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#11c0b9')};
    }
`;