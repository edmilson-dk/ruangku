import styled, { css } from 'styled-components';

const buttonSlide = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid gray;
  padding: 1rem;
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  background: none;
  margin-top: 3rem;
`;

export const SlideAboutWrapper = styled.section`
  width: 100%;
  padding: 3rem 0;
  background: ${({ theme }) => theme.colors.white};
`;

export const SlideAboutContainer = styled.article`
  width: 100%;
  max-width: 38rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SlideAboutButtonPrev = styled(buttonSlide)`
  display: inline-block;
  margin-right: 3rem;
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
