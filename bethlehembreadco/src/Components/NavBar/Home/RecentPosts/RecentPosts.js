import React from "react";

//COMMENT: Destructuring styles from styles.ts
import { RecentPostsContainer, RecentPostsTitle } from "./styles.ts";

const RecentPosts = () => {
  return (
    <RecentPostsContainer>
      <RecentPostsTitle>Recent Posts</RecentPostsTitle>
    </RecentPostsContainer>
  );
};

export default RecentPosts;
