import { 
  FiInstagram, 
  FiFacebook, 
  FiLinkedin, 
  FiTwitter 
} from 'react-icons/fi';

import Container from '../../../styles/container';
import Logo from '../Logo/';

import {
  FooterWrapper,
  FooterContainer,
  FooterContentLeft,
  FooterContentText,
  FooterSocialMedias,
  FooterContentRight,
} from './styles';

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterContainer>
          <FooterContentLeft>
            <Logo menu={true}/>
            <FooterContentText>
              Join our school and enjoy all our courses, with incredible classes and to your taste, so don't miss the chance to join thousands of other students.
            </FooterContentText>
            <FooterSocialMedias>
              <a href="https://github.com/DKSecurity99"><FiInstagram size="3rem" color="#343434"/></a>
              <a href="https://github.com/DKSecurity99"><FiFacebook size="3rem" color="#343434"/></a>
              <a href="https://github.com/DKSecurity99"><FiLinkedin size="3rem" color="#343434"/></a>
              <a href="https://github.com/DKSecurity99"><FiTwitter size="3rem" color="#343434"/></a>
            </FooterSocialMedias>
          </FooterContentLeft>

          <FooterContentRight>
            <div>
              <h3>Help</h3>
              <ul>
                <li>Pricing</li>
                <li>How to order?</li>
                <li>Ho to join?</li>
                <li>Check certificated</li>
                <li>Quality</li>
              </ul>
            </div>
            <div>
              <h3>Explore</h3>
              <ul>
                <li>About us</li>
                <li>Career</li>
                <li>Donation</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3>Contact us</h3>
              <ul>
                <li>droidvidaboa@gmail.com</li>
                <li>@dksecurity</li>
              </ul>
            </div>
          </FooterContentRight>
        </FooterContainer>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
