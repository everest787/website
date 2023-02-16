function BlogDetails({ blog }) { 
    return (  
        <div className="blog-page__blog-details">
            <img className="blog-page__blog-details__img" src={blog.imgUrl} alt="post" />
            <h1 className="blog-page__blog-details__heading">{blog.title}</h1>
            <h3 className="blog-page__blog-details__date">{blog.date}</h3>
            <p className="blog-page__blog-details__content">{blog.body}</p>
        </div>
    );
}

export default BlogDetails;