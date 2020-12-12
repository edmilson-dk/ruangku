import Container from '../../styles/container';

import {
  AboutSectionWrapper,
  AboutSectionContainer,
  AboutSectionTitle,
  AboutSectionContent,
} from './styles';

function AboutSection({ startTitle, endTitle, midTitle, children }) {
  return (
    <AboutSectionWrapper>
      <Container>
        <AboutSectionContainer>
          <AboutSectionTitle>
            <h2>
              <span id="startTitle">{startTitle}</span>
              <span id="midTitle">{midTitle}</span>
              <span id="endTitle">{endTitle}</span>
            </h2>
          </AboutSectionTitle>
          <AboutSectionContent>
            { children }
          </AboutSectionContent>
        </AboutSectionContainer>
      </Container>
    </AboutSectionWrapper>
  );
}

export default AboutSection;
