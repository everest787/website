import React from "react";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

function Blog() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api", {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

    return (
      <div className="container container__blog">
        <div className="blog">
          {data ? 
            data.map((post, index) => (
              //<BlogPage key={index} index={index} post={post} />
              <li key={post.title}>
                <Link to={post.title}>{post.title}</Link>
              </li>
            ))
            : <Loading />}
        </div>
      </div>
    );
  }
  
  export default Blog;
  