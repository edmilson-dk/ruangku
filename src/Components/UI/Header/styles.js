import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 7rem;
  padding: 1rem 0;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  transition: background-color .3s linear;

  ${({ displayMenu }) => displayMenu ? css`
    background: ${({ theme }) => theme.colors.dark};
  ` : css`
    background: ${({ theme }) => theme.colors.white};
  `}
`;

export const Headercontainer = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.h3`
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
    margin-top: 0.5rem;
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
export const HeaderBtnMenu = styled.button`
  width: 100%;
  max-width: 10rem;
  display: block;
  padding: 0.5rem;
  background: none;

  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.yellow};
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 0.8rem;
`;

export const HeaderMenu = styled.nav`
  padding: 3rem 0 16rem 0;
  position: fixed;
  top: 6rem;
  left: -100%;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  transition: all .5s linear;
  background: ${({ theme }) => theme.colors.dark};

  ${({ displayMenu }) => displayMenu ? css`
    left: 0;
  `: css`
    left: -100%;
  `}

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMenuItems = styled.ul`
  width: 100%;
  max-width: 38rem;
  padding: 0 1rem;
  background: transparent;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  li {
    display: block;
  }

  li a {
    font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }

  li + li {
    margin-top: 2rem;
  }
`;

export const HeaderMenuActions = styled.div`
  width: 100%;
  max-width: 38rem;
  padding: 0 1rem;
  margin-top: 3rem;

  a {
    display: inline-block;
    width: calc(50% - 1rem);
    padding: 1.2rem 0;
    font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
    text-align: left;
  }

  .signup {
    border-radius: 0.8rem;
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.yellow};
    text-align: center;
  }
`;
