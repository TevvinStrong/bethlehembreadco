import React from "react";
import { Link } from "react-router-dom";

//COMMENT:Import Image
import BreadTalk from "../../../../Images/BreadTalk.jpg";

//COMMENT: File Imports
import {
  BlogPostContainer,
  BlogPostHeader,
  BlogPostIntroText,
  BlogPost,
  BlogPostImg,
} from "./styles.ts";

const BlogPosts = () => {
  return (
    <BlogPostContainer>
      <BlogPost>
        <BlogPostHeader>Lorem Ipsum</BlogPostHeader>
        <BlogPostImg src={BreadTalk}></BlogPostImg>
        <BlogPostIntroText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </BlogPostIntroText>
      </BlogPost>
    </BlogPostContainer>
  );
};

export default BlogPosts;
