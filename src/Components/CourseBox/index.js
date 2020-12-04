import {
  CourseBoxWrapper,
  CourseBoxContainer,
  CourseBoxImage,
  CourseBoxContent,
  CourseBoxTitle,
  CourseBoxList,
  CourseBoxInfo,
  CourseBoxAuthor,
  CourseBoxAuthorAvatar,
  CourseBoxAuthorText,
  CourseBoxValue,
} from './styles';

function CourseBox({ 
  title, 
  courseBanner,
  listProperties, 
  avatar, 
  name, 
  description, 
  courseValue,
}) {
  return (
    <CourseBoxWrapper>
      <CourseBoxContainer>
        <CourseBoxImage>
          <img src={courseBanner} alt="Premium course" />
        </CourseBoxImage>
        <CourseBoxContent>
          <CourseBoxTitle>{ title }</CourseBoxTitle>
          <CourseBoxList>
            { listProperties && listProperties.map((item, index) => (
              <li key={index}>{ item }</li>
            ))}
          </CourseBoxList>
          
          <CourseBoxInfo>
            <CourseBoxAuthor>
              <CourseBoxAuthorAvatar>
                <img src={avatar} alt="Author to course"/>
              </CourseBoxAuthorAvatar>
              <CourseBoxAuthorText>
                <strong>{name}</strong>
                <span>{description}</span>
              </CourseBoxAuthorText>
            </CourseBoxAuthor>

            <CourseBoxValue>{`R$ ${courseValue}`}</CourseBoxValue>
          </CourseBoxInfo>
        </CourseBoxContent>
      </CourseBoxContainer>
    </CourseBoxWrapper>
  );
}

export default CourseBox;
