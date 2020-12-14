import Container from '../../styles/container';
import Button from '../UI/GenericButton';

import {
  ToJoinWrapper,
  ToJoinContainer,
  ToJoinContent,
  ToJoinTitle,
  ToJoinText,
  ToJoinImage,
} from './styles';

function ToJoinSection({ title, text, image, label }) {
  return (
    <ToJoinWrapper>
      <Container>
        <ToJoinContainer>
          <ToJoinContent>
            <ToJoinTitle>{ title }</ToJoinTitle>
            <ToJoinText>{ text }</ToJoinText>
            <Button label={label} />
          </ToJoinContent>
          <ToJoinImage>
            <img src={image} alt="Care to join" />
          </ToJoinImage>
        </ToJoinContainer>
      </Container>
    </ToJoinWrapper>
  );
}

export default ToJoinSection;
