import React from "react";

//COMMENT: File Imports
import BlogHeader from "./BlogDetails/BlogHeader";
import BlogTabBar from "./BlogDetails/BlogTabBar";
import Footer from "./BlogDetails/Footer";

//COMMENT: Destructure Styles
import { BlogContainer } from "./BlogDetails/styles.ts";

const Blog = () => {
  return (
    <BlogContainer>
      <BlogHeader />
      <BlogTabBar />
      <Footer />
    </BlogContainer>
  );
};

export default Blog;
