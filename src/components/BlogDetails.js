function BlogDetails({ blog }) { 
    return (  
        <div className="blog-page__blog-details">
            <h1 className="blog-page__blog-details__heading">{blog.title}</h1>
            <img className="blog-page__blog-details__img" src={blog.imgUrl} alt="post" />
            <p className="blog-page__blog-details__content">{blog.body}</p>
            <h3 className="blog-page__blog-details__date">{blog.date}</h3>
        </div>
    );
}

export default BlogDetails;