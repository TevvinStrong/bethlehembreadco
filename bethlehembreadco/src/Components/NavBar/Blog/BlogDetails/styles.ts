import { Tab } from '@headlessui/react';
import styled from 'styled-components';

export const BlogContainer = styled.div` 

`;

export const BlogHeaderContainer = styled.div`
    text-align: center;
`;

export const BlogHeader = styled.h1`
`;

export const BlogPost = styled.div`
    font-size: x-small;
`;

export const BlogPostHeader = styled.div`
    font-size: medium;
    text-align: center;
`;

export const BlogPostIntroText = styled.p`
    font-size: small;
`;

export const BlogImg = styled.img`
    top: 16%;
    right: 38%;
    position: absolute;
    height: 34%;
    width: 24%;
    border-radius: 50%;
`;

export const BlogPostContainer = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: thin solid #363c22;
    height: 60%;
    width: 15%;
    border-radius: 3%;
    margin-left: 1%;
    margin-top: 1%;
    margin-bottom: 5%;
    color: #363c22;

    &:hover {
        transform: scale(1.1);
        transition: .5s all ease-in-out;
        cursor: pointer;
    }
`;

export const BlogPostImg = styled.img`
    width: 70%;
    border-radius: 5%;
`;

export const BlogTabContainer = styled.div`
 
`;

export const StyledTabPanels = styled(Tab.Panels)`
`;

export const StyledTabList = styled(Tab.List)`
`;

export const StyledTab = styled(Tab)`
    display: inline-flex;
    padding: 0.5% 1%;
    margin: 2%;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 500;
    color: #4a5568;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;

  &:focus {
    outline: none;
  }

  &.tab-selected {
    color: #ffffff;
    background-color: #2563eb;
    border-bottom: 2px solid #2563eb;
  }

  &:hover {
    background-color: #363c22;
    color: white;
  }
`;

export const FooterContainer = styled.footer`
    position:inherit;
    bottom:0;
    left:0;
    width:100%;
    height: 110px;
    background-color: #363c22;
`;

export const StyledPanel = styled(Tab.Panel)`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const FooterSocialMediaContainer = styled.div`

`;

export const FooterSocialImg = styled.img`
    margin-top: 1%;
    height: 2.5%;
    width: 2.5%;

`;

export const FooterAnchor = styled.a`

`

export const FooterBottomHeader = styled.h4`
    text-align: center;
    color: white;
 
`;