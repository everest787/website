import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BlogDetails from "../components/BlogDetails";
import blogdata from "../data/blog.json";

function BlogPage() { 
    let { blogId } = useParams();
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const data = blogdata.blogs.filter(
            function(data){ return data.title.replace(/ /g,'') === blogId }
        );
        setData(data[0]);
      }, [blogId]);

    return (  
        <div className="container container__blog">
            <div className="blog-page">{data ? <BlogDetails blog={data}/> : <Loading />}</div>
        </div>
    );
}

export default BlogPage;