import { Facebook, Instagram } from '@mui/icons-material'
import styled from 'styled-components'

import stringTranslations  from '../../Translations'

const StyledHeaderOptions = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 0px 6%;
    background-color: #353B21;
    padding: 10px;
`;

const StyledNavBar = styled.div`
    margin-left: 5%;
`;
const StyledHeaderItem = styled.a`
    text-decoration: none;
    margin-right: 30px;
    color: #FFFF;
    font-family: 'Assistant', sans-serif;
    font-size: 16px;
`;

const StyledSocialIcons = styled.div`
    margin-right: 10%;
`;

const StyledFacebook = styled(Facebook)`
    margin-right: 30px;
    color: #FFFF;
    cursor: pointer;
`;

const StyledInstagram = styled(Instagram)`
    margin-right: 30px;
    color: #FFFF;
    cursor: pointer;
`;

const HeaderOptions = () => {
    return (
        <StyledHeaderOptions>
           <StyledNavBar>
              <StyledHeaderItem href='/'>{stringTranslations.headerOptionsMenu.menuItem_1}</StyledHeaderItem>
              <StyledHeaderItem href='/recipies'>{stringTranslations.headerOptionsMenu.menuItem_2}</StyledHeaderItem>
              <StyledHeaderItem href='/about'>{stringTranslations.headerOptionsMenu.menuItem_3}</StyledHeaderItem>
           </StyledNavBar>
            <StyledSocialIcons>
                <StyledFacebook />
                <StyledInstagram />
            </StyledSocialIcons>
        </StyledHeaderOptions>
    )
}

export default HeaderOptions