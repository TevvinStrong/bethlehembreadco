import styled from 'styled-components';

import stringTranslations from '../../Translations';

const StyledLogoContainer = styled.div``;
const StyledLogo = styled.h1`
  text-align: center;
  font-family: 'Waterfall', cursive;
  padding-top: 15px;
  margin-bottom: 0px;
  font-size: 100px;
  font-weight: 200;
`;

const StyledLogoText = styled.p`
  text-align: center;
  margin-top: 0px;
  font-family: serif;
  color: tan;
  font-weight: bolder;
`;

const Logo = () => {
  return(
    <StyledLogoContainer>
      <StyledLogo>{stringTranslations.Logo.name}</StyledLogo>
      <StyledLogoText>{stringTranslations.Logo.text}</StyledLogoText>
    </StyledLogoContainer>
  );
};

export default Logo;
