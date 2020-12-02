import styled, { css } from 'styled-components';

const displayFlex = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GenericSectionWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;

  ${({ isBackgroundWhite }) => isBackgroundWhite ? css`
    background: ${({ theme }) => theme.colors.white};
  ` : css`
    background: ${({ theme }) => theme.colors.whiteDark};
  `}
`;

export const GenericSectionContainer = styled(displayFlex)`
  width: 100%;
`;

export const GenericSectionContent = styled(displayFlex)`
  width: 100%;
  margin-bottom: 3rem;
`;

export const GenericSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  font-weight: 600;
  margin-bottom: 3rem;
`;

export const GenericSectionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;

export const GenericSectionChildrens = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;

  &.with-gap {
    column-gap: 3rem; 
  }
`;
