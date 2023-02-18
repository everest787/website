function BlogThumbnail({ blog }) { 
    return (  
        <div className="blog__thumbnail">
            <div className="blog__thumbnail__side blog__thumbnail__side--front">
                <img className="blog__thumbnail__side--front__img" src={blog.imgUrl} alt="post" />
                <h2 className="blog__thumbnail__side--front__heading">{blog.title}</h2>
                <h3 className="blog__thumbnail__side--front__date">{blog.date}</h3>
            </div>
            <div className="blog__thumbnail__side blog__thumbnail__side--back">
                <p className="blog__thumbnail__side--back__body">{blog.body}</p>
            </div>
        </div>
    );
}

export default BlogThumbnail;