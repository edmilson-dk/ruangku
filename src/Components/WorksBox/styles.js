import styled from 'styled-components';

export const WorksBoxWrapper = styled.article`
  width: 100%;
  padding: 2.5rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: transparent;

  & + article {
    margin-top: 2.5rem;
  }
  
  @media (min-width: 980px) {
    & + article {
      margin-top: 0;
    }
    height: 26rem;
  }
`;

export const WorksBoxContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const WorksBoxIcon = styled.p`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
`;

export const WorksBoxTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.mobile.md};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  margin: 1.5rem 0;
  text-align: left;
`;

export const WorksBoxText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.gray};
  text-align: left;
`;
