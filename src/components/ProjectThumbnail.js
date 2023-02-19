function ProjectThumbnail({ project }) { 
    return (  
        <div className="projects__thumbnail">
            <h2 className="projects__thumbnail__heading">{project.title}</h2>
            <h3 className="projects__thumbnail__date">{project.date}</h3>
            <img className="projects__thumbnail__img" src={project.imgUrl} alt="post" />
        </div>
    );
}

export default ProjectThumbnail;