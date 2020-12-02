import Container from '../../styles/container';

import {
  GenericSectionWrapper,
  GenericSectionContainer,
  GenericSectionContent,
  GenericSectionTitle,
  GenericSectionText,
  GenericSectionChildrens,
} from './styles';

function GenericSection({ title, text, isBackgroundWhite, children}) {
  return (
    <GenericSectionWrapper isBackgroundWhite={isBackgroundWhite}>
      <Container>
        <GenericSectionContainer>
          <GenericSectionContent>
            <GenericSectionTitle>{ title }</GenericSectionTitle>
            <GenericSectionText>{ text }</GenericSectionText>
          </GenericSectionContent>
          <GenericSectionChildrens>{ children }</GenericSectionChildrens>
        </GenericSectionContainer>
      </Container>
    </GenericSectionWrapper>
  );
}

export default GenericSection;
