import styled from 'styled-components';

export const BannerWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.white};
`;

export const BannerContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;

  @media (min-width: 740px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const BannerTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  text-align: left;

  span {
    color: ${({ theme }) => theme.colors.greenLight};
  }
`;

export const BannerText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  text-align: left;
  margin: 3rem 0;
`;

export const BannerButton = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  text-align: left;

  padding: 1.2rem 1rem;
  border-radius: 0.8rem;
  border: none;
  cursor: pointer;
`;

export const BannerImage = styled.div`
  width: 100%;

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;
