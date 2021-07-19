import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, CloseModalButton, ModalContent, ModalWrapper, InfoWrapper, InfoRow, TopLine, TextWrapper, Description } from './ProductsModificationsSectionElements';

export const Modal = ({ showModal, setShowModal, affectedProducts }) => {

    const renderData = () => {
        affectedProducts.forEach(element => {
            console.log("modal element")
            console.log(element.value)
            return(
                <Description darkText={false}>Product {element.value}</Description>
            )
        });
    }
    
    const modalRef = useRef();

    const animation = useSpring({
      config: {
        duration: 250
      },
      opacity: showModal ? 1 : 0,
      transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed ESC');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper showModal={showModal}>
                <ModalContent>
                  <InfoWrapper>
                      <InfoRow>
                          <TextWrapper>
                              <TopLine>Affected products</TopLine>
                              {renderData()}
                          </TextWrapper>
                      </InfoRow>
                  </InfoWrapper>
                </ModalContent>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
  };
