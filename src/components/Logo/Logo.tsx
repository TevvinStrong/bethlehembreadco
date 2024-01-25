import styled from 'styled-components'

import stringTranslations from '../../Translations';

const StyledLogoContainer = styled.div``;
const StyledLogo = styled.h1`
  text-align: center;
`;

const Logo = () => {
  return(
    <StyledLogoContainer>
      <StyledLogo>{stringTranslations.Logo.name}</StyledLogo>
    </StyledLogoContainer>
  );
};

export default Logo;
