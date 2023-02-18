function ProjectThumbnail({ project }) { 
    return (  
        <div className="projects__thumbnail">
            <img className="projects__thumbnail__side--front__img" src={project.imgUrl} alt="post" />
            <h2 className="projects__thumbnail__side--front__heading">{project.title}</h2>
            <h3 className="projects__thumbnail__side--front__date">{project.date}</h3>
        </div>
    );
}

export default ProjectThumbnail;