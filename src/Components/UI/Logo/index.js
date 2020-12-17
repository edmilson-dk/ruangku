import { LogoWrapper } from './styles';

function Logo({ menu }) {
  return (
    <LogoWrapper displayMenu={menu}>
      Ruang<span>Ku</span>
    </LogoWrapper>
  );
}

export default Logo;
