import Container from '../../styles/container';
import backgroundImage from '../../assets/images/background-ruangku.png';

import {
  BannerWrapper,
  BannerContainer,
  BannerContent,
  BannerTitle,
  BannerText,
  BannerButton,
  BannerImage,
} from './styles';

function Banner() {
  return (
    <BannerWrapper>
      <Container>
        <BannerContainer>
          <BannerContent>
            <BannerTitle>
              <span>Achieve</span> your future  career
            </BannerTitle>
            <BannerText>
              Choose your skill path test your limit and master it, your future career awaits you.
            </BannerText>
            <BannerButton>Get Started</BannerButton>
          </BannerContent>
          <BannerImage>
            <img src={backgroundImage} alt="Ruangku"/>
          </BannerImage>
        </BannerContainer>
      </Container>
    </BannerWrapper>
  );
}

export default Banner;
