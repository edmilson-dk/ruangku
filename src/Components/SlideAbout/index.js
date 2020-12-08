import {
  SlideAboutWrapper,
  SlideAboutContainer,
  SlideAboutButtonPrev,
  SlideAboutButtonNext,
  SlideAboutContent,
} from './styles';

function SlideAbout({ children }) {
  let item = 0;
  window.addEventListener('load', () => {
    const items = document.querySelectorAll('.slideItem');
    let slideWidth = items[0].getBoundingClientRect().width;
    item = Math.floor(slideWidth);

    items[0].classList.add('active');

    items.forEach((item, index) => {
      item.style.left = slideWidth * index + 'px';
    });
  });

  function toggleClassElement(currentElement, targetElement) {
    currentElement.classList.remove('active');
    currentElement.classList.add('hide')
    targetElement.classList.add('active');
  }

  function nextItem() {
    const activeItem = document.querySelector('.active');
    const next = activeItem.nextElementSibling;
    
    const position = next.style.left;
    
    next.style.left =  `-${position}`;
    activeItem.style.left = `-${position}`;
    
    toggleClassElement(activeItem, next);
  }

  function prevItem() {
    const activeItem = document.querySelector('.active');
    const prev = activeItem.previousElementSibling;

    const p = prev.style.left

    if (p === `-${item}px`) {
      prev.style.left = '0';
      activeItem.style.left = `${item}px`;
    
    } else {
      const pixelsToInt = Number(String(p).slice(1, -2));
      
      prev.style.left = `-${pixelsToInt - item}px`;
      activeItem.style.left = `${pixelsToInt}px`;
    }

    toggleClassElement(activeItem, prev);
  }

  return (
    <SlideAboutWrapper>
      <SlideAboutContainer>
        <SlideAboutContent>{ children }</SlideAboutContent>
      </SlideAboutContainer>
        <SlideAboutButtonPrev onClick={prevItem}>{'<'}</SlideAboutButtonPrev>
        <SlideAboutButtonNext onClick={nextItem}>{'>'}</SlideAboutButtonNext>
    </SlideAboutWrapper>
  );
}

export default SlideAbout;
