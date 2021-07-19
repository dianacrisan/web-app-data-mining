import React from 'react';
import { TopLine, InfoContainer, InfoWrapper, InfoRow, Heading, TextWrapper, Description } from './DescriptionComponentElements';

const DescriptionComponent = ({lightBg, id, topLine, lightText, darkText, headline, description, description2, description3, description4 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Description darkText={darkText}></Description>
                            <Description darkText={darkText}>{description}</Description>
                            <Description darkText={darkText}>{description2}</Description>
                            <Description darkText={darkText}>{description3}</Description>
                            <Description darkText={darkText}>{description4}</Description>
                        </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DescriptionComponent;
