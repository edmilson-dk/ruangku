import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerItem = styled.div`
  width: 50px;
  height: 50px;
  
  position: absolute;
  top: 50%;
  left: 50%;

  border-radius: 50%;
  border-top: 0.3rem solid #05c46b;
  
  transition: all .3s linear;
  animation: ${spinner} 0.7s linear infinite;
`;
