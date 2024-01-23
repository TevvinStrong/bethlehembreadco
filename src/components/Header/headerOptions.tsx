// import { useTransition } from 'react';
import { Facebook, Instagram } from '@mui/icons-material'
import styled from 'styled-components'

import { headerOptionsMenu } from '../../../en.json'

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
    font-family: sans-serif;
    font-size: 12px;
`;

const StyledSocialIcons = styled.div`
    margin-right: 10%;
`;

const StyledFacebook = styled(Facebook)`
    margin-right: 30px;
    color: #FFFF;
`;

const StyledInstagram = styled(Instagram)`
    margin-right: 30px;
    color: #FFFF;
`;

const HeaderOptions = () => {
    // const { t } = useTransition();
    return (
        <StyledHeaderOptions>
           <StyledNavBar>
              <StyledHeaderItem href='/'>{headerOptionsMenu.menuItem_1}</StyledHeaderItem>
              <StyledHeaderItem href='/recipies'>{headerOptionsMenu.menuItem_2}</StyledHeaderItem>
              <StyledHeaderItem href='/about'>{headerOptionsMenu.menuItem_3}</StyledHeaderItem>
           </StyledNavBar>
            <StyledSocialIcons>
                <StyledFacebook />
                <StyledInstagram />
            </StyledSocialIcons>
        </StyledHeaderOptions>
    )
}

export default HeaderOptions