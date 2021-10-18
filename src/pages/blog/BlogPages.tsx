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
        <Blog showMany={true} />
      </div>
    </>
  );
};

export default BlogPages;
