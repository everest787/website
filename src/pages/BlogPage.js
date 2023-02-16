import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import BlogDetails from "../components/BlogDetails";

function BlogPage() { 
    let { blogId } = useParams();
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/" + blogId.replace(/ /g,''), {})
        .then((res) => res.json())
        .then((response) => {
            setData(response);
            console.log(response);
        })
        .catch((error) => console.log(error));
    }, []);


    return (  
        <div className="post-container">
        
            <div className="blog-page">Test {data ? <BlogDetails blog={data}/> : <Loading />}</div>
        </div>
    );
}

export default BlogPage;