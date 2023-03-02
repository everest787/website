import Question from "../pages/blogs/Question";

const components = {
    oneofmyfavouritequestionstoaskpeople: Question
};

function GetSpecificBlog(props) {
    const SpecificBlog = components[props.blog.title.replace(/ /g,'').toLowerCase()];
    return <SpecificBlog/>;
  }

function BlogDetails({ blog }) { 

    return (  
        <div className="blog-page__blog-details">
            {/*<img className="blog-page__blog-details__img" src={blog.imgUrl} alt="post" />*/}
            <h1 className="blog-page__blog-details__heading">{blog.title}</h1>
            <h3 className="blog-page__blog-details__date">{blog.date}</h3>
            <GetSpecificBlog blog={blog}/>
        </div>
    );
}

export default BlogDetails;