import {
  SlideAboutBoxWrapper,
  SlideAboutBoxHeader,
  SlideAboutBoxAvatar,
  SlideAboutBoxInfo,
  SlideAboutBoxCotent,
} from './styles';

function SlideAboutBox({ avatar, name, description, text }) {
  return (
    <SlideAboutBoxWrapper className="slideItem">
      <SlideAboutBoxHeader>
        <SlideAboutBoxAvatar>
          <img src={avatar} alt="About user"/> 
        </SlideAboutBoxAvatar>
        <SlideAboutBoxInfo>
          <strong>{ name }</strong>
          <span>description</span>
        </SlideAboutBoxInfo>
      </SlideAboutBoxHeader>
      
      <SlideAboutBoxCotent>
        <p>{text}</p>
      </SlideAboutBoxCotent>
    </SlideAboutBoxWrapper>
  );
} 

export default SlideAboutBox;
