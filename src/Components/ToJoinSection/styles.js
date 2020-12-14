import styled from 'styled-components';

export const ToJoinWrapper = styled.section`
  width: 100%;
  padding: 4rem 0;
  background: ${({ theme }) => theme.colors.white};
`;

export const ToJoinContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  column-gap: 4rem;
  justify-content: center;
  align-items: center;
`;

export const ToJoinContent = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ToJoinTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.mobile.lg};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 700;
  text-align: left;
  position: relative;
    
  &::before {
    content: "";
    position: absolute;
    display: block;
    height: 0.8rem;
    bottom: 0.8rem;
    background: ${({ theme }) => theme.colors.greenDark};
    width: 55%;
    left: 0;
  }
`;

export const ToJoinText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  text-align: left;
  margin: 3rem 0;
`;

export const ToJoinImage = styled.div`
  width: 100%;

  img {
    display: block;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;
