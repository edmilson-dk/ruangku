import styled, { css } from 'styled-components';

export const SlideAboutBoxWrapper = styled.article`
  width: 38rem !important;
  min-width: 38rem !important;
  max-width: 38rem !important;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.8rem;
  position: relative;
  transition: all .5s linear;
  
  .hide {
    display: none;
  }
`; 

export const SlideAboutBoxHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const SlideAboutBoxAvatar = styled.div`
  width: 5rem;
  height: 5rem;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const SlideAboutBoxInfo = styled.div`
  margin-right: 1.2rem;

  > strong {
    font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 500;
    text-align: left;
  }

  > span {
    font-size: ${({ theme }) => theme.fontSizes.mobile.xs};
    color: ${({ theme }) => theme.colors.dark};
    text-align: left;
  }
`;

export const SlideAboutBoxCotent = styled.div`
  width: 100%;
  
  > p {
    font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
    color: ${({ theme }) => theme.colors.gray};
    text-align: left;
  }
`;
