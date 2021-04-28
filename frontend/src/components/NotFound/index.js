import React from 'react';
import { NotFoundContainer, NotFoundH1, NotFoundLink, ImgWrap, Img } from './NotFoundElements';
import notfound from '../../images/page_not_found.svg';

const NotFound = () => {
    return (
        <>
            <NotFoundContainer>
                <ImgWrap>
                    <Img src={notfound} alt='notfound'/>
                </ImgWrap>
                <NotFoundH1>Page not found</NotFoundH1>
                <NotFoundLink to="/">Return to dmc</NotFoundLink>
            </NotFoundContainer>
        </>
    )
}

export default NotFound;
