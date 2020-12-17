import Container from '../../../styles/container';

import {
  GenericSectionWrapper,
  GenericSectionContainer,
  GenericSectionContent,
  GenericSectionTitle,
  GenericSectionText,
  GenericSectionChildrens,
} from './styles';

function GenericSection({ title, text, isBackgroundWhite, children, ...rest }) {
  return (
    <GenericSectionWrapper isBackgroundWhite={isBackgroundWhite}>
      <Container>
        <GenericSectionContainer>
          <GenericSectionContent>
            <GenericSectionTitle>{ title }</GenericSectionTitle>
            <GenericSectionText>{ text }</GenericSectionText>
          </GenericSectionContent>
          <GenericSectionChildrens {...rest}>{ children }</GenericSectionChildrens>
        </GenericSectionContainer>
      </Container>
    </GenericSectionWrapper>
  );
}

export default GenericSection;
