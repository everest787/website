function ProjectThumbnail({ project }) { 
    return (  
        <div className="projects__thumbnail">
            <h2 className="projects__thumbnail__heading">{project.title}</h2>
            <img className="projects__thumbnail__img" src={project.imgUrl} alt="post" />
            <div className="projects__thumbnail__shape">
                <div className="projects__thumbnail__shape__form"></div>
                <h3 className="projects__thumbnail__shape__date">{project.date}</h3>
                <h3 className="projects__thumbnail__shape__description">{project.desc}</h3>
            </div>
        </div>
    );
}

export default ProjectThumbnail;