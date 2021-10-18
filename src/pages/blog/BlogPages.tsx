import React from "react";
import Blog from "components/blog/Blog";

const BlogPages: React.FC = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Blog />
      </div>
    </>
  );
};

export default BlogPages;
