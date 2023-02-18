function ProjectDetails({ project }) { 
    return (  
        <div className="project-page__project-details">
            {/*<img className="project-page__project-details__img" src={project.imgUrl} alt="post" />*/}
            <h1 className="project-page__project-details__heading">{project.title}</h1>
            <h3 className="project-page__project-details__date">{project.date}</h3>
            <p className="project-page__project-details__content">{project.body}</p>
        </div>
    );
}

export default ProjectDetails;