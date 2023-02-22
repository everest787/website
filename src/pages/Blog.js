import React from "react";
import Loading from "../components/Loading";
import BlogThumbnail from "../components/BlogThumbnail";
import { Link } from "react-router-dom";
import blogdata from "../data/blog.json";

function Blog() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData(blogdata.blogs.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

    return (
      <div className="container container__blog">
        <div className="blog">
          {data ? 
            data.map((post, index) => (
              !index ? 
              <Link to={post.title} className="blog__link blog__link__first">
                <BlogThumbnail blog={post}/>
              </Link>
              :
              <Link to={post.title} className="blog__link">
                <BlogThumbnail blog={post}/>
              </Link>
            ))
            : <Loading />}
        </div>
      </div>
    );
  }
  
  export default Blog;
  