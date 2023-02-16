function BlogDetails({ blog }) { 
    return (  
        <div className="container container__blog">
            <h1 className="heading">{blog.title}</h1>
            <img className="image" src={blog.imgUrl} alt="post" />
            <p>{blog.body}</p>
            <div className="info">      
                <h4>Written by: {blog.author}</h4>
            </div>
        </div>
    );
}

export default BlogDetails;