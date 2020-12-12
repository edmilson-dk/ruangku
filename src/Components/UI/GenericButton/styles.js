import styled from 'styled-components';

export const Button = styled.button`
  width: auto;
  margin: 3rem auto 0 auto;
  padding: 1.2rem 1rem;
  border: none;
  background: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  border-radius: 0.8rem;
  text-align: center;
`;
