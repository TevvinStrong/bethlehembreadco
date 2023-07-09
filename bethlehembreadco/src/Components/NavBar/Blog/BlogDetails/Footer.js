import React from "react";

//destructure styles from from styles.ts
import {
  FooterAnchor,
  FooterBottomHeader,
  FooterContainer,
  FooterSocialImg,
  FooterSocialMediaContainer,
} from "./styles.ts";

//import photo
import Instagram from "../../../../Images/InstagramLogo.png";
import Twitter from "../../../../Images/TwitterLogo.png";
import Facebook from "../../../../Images/FacebookLogo.png";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocialMediaContainer>
        <FooterAnchor href="#">
          <FooterSocialImg alt="Twitter" src={Twitter}></FooterSocialImg>
        </FooterAnchor>
        <FooterAnchor href="#">
          <FooterSocialImg alt="Facebook" src={Facebook}></FooterSocialImg>
        </FooterAnchor>
        <FooterAnchor href="#">
          <FooterSocialImg alt="Instagram" src={Instagram}></FooterSocialImg>
        </FooterAnchor>
      </FooterSocialMediaContainer>
      <FooterBottomHeader>Bethlehem Bread Co.</FooterBottomHeader>
    </FooterContainer>
  );
};

export default Footer;
