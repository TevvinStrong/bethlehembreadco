import React, { useState } from "react";
import { Tab } from "@headlessui/react";

//COMMENT: Import files
import BlogPosts from "./BlogPost.js";

//COMMENT: Destructuring Styles form styles.ts
import {
  BlogTabContainer,
  StyledPanel,
  StyledTab,
  StyledTabList,
} from "./styles.ts";

export const BlogTabBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <BlogTabContainer>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <StyledTabList>
          <StyledTab>Running a Business</StyledTab>
          <StyledTab>Recipe</StyledTab>
          <StyledTab>Baking Hacks</StyledTab>
        </StyledTabList>
        <Tab.Panels>
          <StyledPanel>
            <BlogPosts />
            <BlogPosts />
            <BlogPosts />
          </StyledPanel>
          <StyledPanel>
            <BlogPosts />
          </StyledPanel>
          <StyledPanel>
            <BlogPosts />
            <BlogPosts />
          </StyledPanel>
        </Tab.Panels>
      </Tab.Group>
    </BlogTabContainer>
  );
};

export default BlogTabBar;
