function BlogThumbnail({ blog }) { 
    return (  
        <div className="blog__thumbnail">
            <img className="blog__thumbnail__img" src={blog.imgUrl} alt="post" />
            <h2 className="blog__thumbnail__heading">{blog.title}</h2>
            <h3 className="blog__thumbnail__date">{blog.date}</h3>
        </div>
    );
}

export default BlogThumbnail;