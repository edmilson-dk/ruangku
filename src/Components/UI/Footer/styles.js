import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.dark};
`;

export const FooterContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;

  @media (min-width: 740px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterContentLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const FooterContentText = styled.p`
  text-align: left;
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin: 2rem 0;
`;

export const FooterSocialMedias = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    width: 4.5rem;
    height: 4.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
  }
`;

export const FooterContentRight = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 740px) {
    margin-bottom: 0;
  }

  > div {
    width: 100%;
    
    > h3 {
      font-size: ${({ theme }) => theme.fontSizes.mobile.md};
      color: ${({ theme }) => theme.colors.white};
      text-align: left;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }
    > ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      > li {
        font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
        color: ${({ theme }) => theme.colors.gray};
        text-align: left;
      }
    }

    > div:last-child {
      grid-column: span 2;
    }
  }
`;
