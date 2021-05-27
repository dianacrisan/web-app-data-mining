import React from 'react';
import { TopLine, InfoContainer, InfoWrapper, InfoRow, Heading, TextWrapper, Description } from './DescriptionComponentElements';

const DescriptionComponent = ({lightBg, id, topLine, lightText, darkText, headline, description, img, alt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Description darkText={darkText}>{description}</Description>
                        </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default DescriptionComponent;
