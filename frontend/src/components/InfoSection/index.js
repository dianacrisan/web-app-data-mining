import React from 'react';
import { TopLine, InfoContainer, BtnWrap, ButtonLink, InfoWrapper, Img, Subtitle, InfoRow, Column1, Column2, Heading, ImgWrap, TextWrapper } from './InfoSectionElements';

const InfoSection = ({path, primary, dark, dark2, lightBg, id, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <ButtonLink to={path}
                                            // smooth={true}
                                            duration={500}
                                            // spy={true}
                                            exact="true"
                                            offset={-80} // for triggering the lines in nav
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                            dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</ButtonLink>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
