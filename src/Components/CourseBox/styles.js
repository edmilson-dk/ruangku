import styled, { css } from 'styled-components'

export const CourseBoxWrapper = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.8rem;
  padding: 1.5rem;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.50);

  & + article {
    margin-top: 3rem;
  }
`;

export const CourseBoxContainer = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CourseBoxImage = styled.div`
  width: 100%;
  max-height: 26rem;
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CourseBoxContent = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CourseBoxTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.mobile.md};
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const CourseBoxList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  > li + li {
    margin-top: 1.2rem;
  }

  li {
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.mobile.xs};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const CourseBoxInfo = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CourseBoxAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CourseBoxAuthorAvatar = styled.div`
  width: 6rem;
  height: 6rem;
  margin-right: 1.2rem;
  
  > img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CourseBoxAuthorText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.xs};
  text-align: left;

  > strong {
    color: ${({ theme }) => theme.colors.dark};
    display: block;
    font-weight: 500;
  }

  > span {
    display: block;
    color: ${({ theme }) => theme.colors.gray};
  } 
`;

export const CourseBoxValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.mobile.sm};
  color: ${({ theme }) => theme.colors.yellow};
  font-weight: 500;
  text-align: right;
`;
