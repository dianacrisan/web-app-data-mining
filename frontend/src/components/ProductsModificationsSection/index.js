import { TopLine, InfoContainer, InfoWrapper, InfoRow, Heading, TextWrapper, Description, BtnWrap, Button } from './ProductsModificationsSectionElements';
import { React, useState } from 'react';
import { Modal } from './Modal';

const ProductsModificationsSection = ({ lightBg, id, topLine, lightText, darkText, headline, description }) => {

    let productsArray = [];
    fetch("http://localhost:3001/modifications-products")
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                productsArray.push({ value: element.product_name, label: element.product_name, product_id: element.product_id, measurement_unit: element.measurement_unit, no_reviews: element.no_reviews });
            })
        })
        .catch(function (err) { console.error(err); });

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(previousValue => !previousValue);
    };

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Description>{description}</Description>
                            <BtnWrap>
                                <Button onClick={openModal}>Open section with products and their price modifications</Button>
                            </BtnWrap>
                            <Modal showModal={showModal} setShowModal={setShowModal} affectedProducts={productsArray}/>
                        </TextWrapper>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default ProductsModificationsSection;
