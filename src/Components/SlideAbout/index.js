import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

import { useEffect } from 'react';

import {
  SlideAboutWrapper,
  SlideAboutContainer,
  SlideAboutButtonPrev,
  SlideAboutButtonNext,
  SlideAboutContent,
} from './styles';

function SlideAbout({ children }) {
  let globalWidthItemsSlide = 0;

  useEffect(() => {
    setTimeout(() => {
    const slideItems = document.querySelectorAll('.slideItem');
    let slideWidth = slideItems[0].getBoundingClientRect().width;
    
    slideItems[0].classList.add('active');
    globalWidthItemsSlide = Math.floor(slideWidth);

    slideItems.forEach((item, index) => {
      item.style.left = `${slideWidth * index}px`;
    });
    }, 200);
  }, []);

  function toggleClassElement(currentElement, targetElement) {
    currentElement.classList.remove('active');
    currentElement.classList.add('hide')
    targetElement.classList.add('active');
  }

  function toggleStyleLeftPositionItems(currentElement, targetElement, currentElementValue, targetElementValue) {
    currentElement.style.left = currentElementValue;
    targetElement.style.left = targetElementValue;
  }

  function nextSlideItem() {
    const activeItem = document.querySelector('.active');
    const nextItem = activeItem.nextElementSibling;
    
    const nextItemLeftPosition = nextItem ? nextItem.style.left : false;
      
    const styleLeftPositionValue = `-${nextItemLeftPosition}`;
    
    if (nextItemLeftPosition) {  
      toggleStyleLeftPositionItems(
        activeItem, nextItem, 
       styleLeftPositionValue, 
        styleLeftPositionValue
      );
      toggleClassElement(activeItem, nextItem);
    }
  }

  function previousSlideItem() {
    const activeItem = document.querySelector('.active');
    const previousItem = activeItem.previousElementSibling;
    const previousItemLeftPosition = previousItem ? previousItem.style.left : false;

    if (previousItem) {
      if (previousItemLeftPosition === `-${globalWidthItemsSlide}px`) {
        toggleStyleLeftPositionItems(
          activeItem, previousItem, 
          `${globalWidthItemsSlide}px`, '0px'
        );
      } else {
        const pixelsToInt = Number(String(previousItemLeftPosition).slice(1, -2));
        const previousItemStyleLeft = `-${pixelsToInt - globalWidthItemsSlide}px`;
      
        toggleStyleLeftPositionItems(
          activeItem, previousItem, 
          `${pixelsToInt}px`,
          previousItemStyleLeft
        );
      }
      toggleClassElement(activeItem, previousItem);
    }
  }

  return (
    <SlideAboutWrapper>
      <SlideAboutContainer>
        <SlideAboutContent>{ children }</SlideAboutContent>
        <div id="slideButtons">
          <SlideAboutButtonPrev onClick={previousSlideItem}>
            <FiArrowLeft size="3rem" color="#B7B7B7"/>
          </SlideAboutButtonPrev>
          <SlideAboutButtonNext onClick={nextSlideItem}>
            <FiArrowRight size="3rem" color="#B7B7B7"/>
          </SlideAboutButtonNext>
        </div>
      </SlideAboutContainer>
    </SlideAboutWrapper>
  );
}

export default SlideAbout;
