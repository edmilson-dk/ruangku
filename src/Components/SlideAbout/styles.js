import styled, { css } from 'styled-components';

const buttonSlide = styled.button`
  width: 5rem;
  height: 4rem;
  border-radius: 0.8rem;
  border: 1px solid gray;
  font-size: 3rem;
  font-weight: 600;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  text-align: center;
  margin-top: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.greenDark};
  }

  &:hover > svg,
  &:focus > svg {
    stroke: ${({ theme }) => theme.colors.greenDark};
  }
`;

export const SlideAboutWrapper = styled.section`
  width: 100%;
  padding: 3rem 0;
`;

export const SlideAboutContainer = styled.article`
  width: 100%;
  max-width: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > #slideButtons {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SlideAboutButtonPrev = styled(buttonSlide)`
  display: inline-block;
`;
export const SlideAboutButtonNext = styled(buttonSlide)`
  display: inline-block;
`;

export const SlideAboutContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
`;
