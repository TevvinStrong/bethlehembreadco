import { React } from "react";

//COMMENT: Image Imports
import BakeryHero from "../../../../Images/BakeryHero.jpeg";

//COMMENT: Destructuring styles from style.ts
import { CenterAboutContainer, CenterImage, CenterAboutSection, CenterAboutSectionText, AboutHeader } from "./styles.ts";

export const AboutDetails = () => {
    return ( 
        <CenterAboutContainer>
            <CenterImage src = { BakeryHero } alt = "Bakery With Homemade Bread Seen Through a Window"/>
            <CenterAboutSection>
                <CenterAboutSectionText>
                    <AboutHeader>About Us</AboutHeader>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam,
                </CenterAboutSectionText>
            </CenterAboutSection>
        </CenterAboutContainer>
    )
}