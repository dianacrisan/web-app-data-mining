import { TopLine, InfoContainer, InfoWrapper, InfoRow, Heading, TextWrapper } from './TimeSeriesChartElements';
import React from 'react';
import SearchBar from './SearchBar';

const TimeSeriesChartSection = ({ lightBg, id, topLine, lightText, darkText, headline, description }) => {

    let productsArray = [];
    fetch("http://localhost:3001/search-products")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                productsArray.push({ value: element.product_name, label: element.product_name, product_id: element.product_id, measurement_unit: element.measurement_unit, no_reviews: element.no_reviews });
            })
        })
        .catch(function (err) { console.error(err); });

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                        </TextWrapper>
                    </InfoRow>
                    <SearchBar searchList={productsArray} />
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default TimeSeriesChartSection;
