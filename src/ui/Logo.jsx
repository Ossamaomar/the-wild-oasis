import styled from "styled-components";
import { useDarkModeContext } from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const {isDarkMode} = useDarkModeContext()

  return (
    <StyledLogo>
      <Img src={`${isDarkMode ? "/logo-dark.png" : "/logo-light.png"} `} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
