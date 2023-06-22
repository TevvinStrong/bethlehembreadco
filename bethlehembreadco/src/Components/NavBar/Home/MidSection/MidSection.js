import React from "react";

//COMMENT: Image Imports
import BreadVintage from "../../../../Images/BreadVintage.jpeg";

//COMMENT: Destructuring styles from styles.ts
import {
  MidSectionContainer,
  MidSizeImage,
  MidSizeAboutSection,
  MidSizeAboutSectionText,
  MidSizeAboutSectionButton,
  MidSizeAboutSectionButtonContainer,
} from "./styles.ts";

export const MidSection = () => {
  //COMMENT: This function listens for the button onClick event.
  const OpenAboutMePage = () => {
    //COMMENT: right now all we log is a string to make sure the eventListener works.
    window.console.log("Button Clicked!!");
  };
  return (
    <MidSectionContainer>
      <MidSizeImage src={BreadVintage} alt="Vintage style bread" />
      <MidSizeAboutSection>
        <MidSizeAboutSectionText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </MidSizeAboutSectionText>
        <MidSizeAboutSectionButtonContainer>
          <MidSizeAboutSectionButton
            variant="contained"
            onClick={OpenAboutMePage}
          >
            READ MORE
          </MidSizeAboutSectionButton>
        </MidSizeAboutSectionButtonContainer>
      </MidSizeAboutSection>
    </MidSectionContainer>
  );
};

export default MidSection;
