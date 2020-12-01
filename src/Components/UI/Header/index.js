import { useState } from 'react';
import Container from '../../../styles/container';

import {
  HeaderWrapper,
  Headercontainer,
  HeaderLogo,
  HeaderBtnMenu,
  HeaderMenu,
  HeaderMenuItems,
  HeaderMenuActions,
} from './styles';

function Header() {
  const [ menu, setMenu ] = useState(false);

  function handleClickMenu() {
    setMenu(!menu);
    document.body.style.overflow = !menu ? 'hidden' : 'scroll';
  } 

  return (
    <HeaderWrapper displayMenu={menu}>
      <Container>
        <Headercontainer>
          <HeaderLogo displayMenu={menu}>
            Ruang<span>Ku</span>
          </HeaderLogo>
            <HeaderBtnMenu onClick={handleClickMenu}>Menu</HeaderBtnMenu>
            <HeaderMenu displayMenu={menu}>
              <HeaderMenuItems>
                <li><a href="https://github.com/DKSecurity99">About us</a></li>
                <li><a href="https://github.com/DKSecurity99">Class</a></li>
                <li><a href="https://github.com/DKSecurity99">Mentors</a></li>
                <li><a href="https://github.com/DKSecurity99">Course</a></li>
                <li><a href="https://github.com/DKSecurity99">Blog</a></li>
              </HeaderMenuItems>
              <HeaderMenuActions>
                <a href='https://github.com/DKSecurity99'>Login</a>
                <a className="signup" href='https://github.com/DKSecurity99'>Sign up</a>
              </HeaderMenuActions>
            </HeaderMenu>
        </Headercontainer>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
