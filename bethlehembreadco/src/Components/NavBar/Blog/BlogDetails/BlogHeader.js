import React from "react";

//COMMENT: Import Files
import Jumbotron from "../../../Jumbotron/Jumbotron";

//COMMENT: Import images
import BusinessLogo from "../../../../Images/BethlehemBreadCo.jpeg";

//COMMENT: Destructuring styles from styles.ts
import { BlogHeader, BlogImg, BlogHeaderContainer } from "./styles.ts";

export const BlogHead = () => {
  return (
    <BlogHeaderContainer>
      <Jumbotron />
      <BlogImg src={BusinessLogo}></BlogImg>
      <BlogHeader>BREADtalk.</BlogHeader>
    </BlogHeaderContainer>
  );
};

export default BlogHead;
