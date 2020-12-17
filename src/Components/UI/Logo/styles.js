import styled, { css } from 'styled-components';

export const LogoWrapper = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.mobile.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.dark};
  text-align: left;
  transition: color .3s linear;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 4rem;
    background: ${({ theme }) => theme.colors.yellow};
    margin-left: 50%;
    margin-top: -0.2rem;
  }

  span {
    color: ${({ theme }) => theme.colors.greenLight};
  }

  ${({ displayMenu }) => displayMenu ? css`
    color: ${({ theme }) => theme.colors.white};
  ` : css`
    color: ${({ theme }) => theme.colors.dark};
  `}
`;

