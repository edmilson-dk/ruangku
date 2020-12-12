import styled from 'styled-components';

export const AboutSectionWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.white};
`;

export const AboutSectionContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
`;

export const AboutSectionTitle = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  > h2 {
    font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
    color: ${({ theme }) => theme.colors.dark};
    font-weight: 600;
    text-align: left;

    span {
      position: relative;
    }

    span + span {
      margin-left: 0.5rem;
    }
  }
  
  #startTitle::after,
  #endTitle::after {
    content: "";
    position: absolute;
    display: block;
    height: 0.8rem;
    bottom: 0.8rem;
  }

  #startTitle::after {
    background: ${({ theme }) => theme.colors.greenDark};
    width: 90%;
    left: 0;
  }
  #endTitle::after {
    background: ${({ theme }) => theme.colors.yellow};
    width: 100%;
    right: 0;
  }
`;

export const AboutSectionContent = styled.div`
  width: 100%;
`;
