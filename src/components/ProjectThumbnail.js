function ProjectThumbnail({ project }) { 
    return (  
        <div className="projects__thumbnail">
            <h2 className="projects__thumbnail__heading">{project.title}</h2>
            <img className="projects__thumbnail__img" src={project.imgUrl} alt="post" />
            <h3 className="projects__thumbnail__description">{project.desc}</h3>
            <div className="projects__thumbnail__footer">
                <h3 className="projects__thumbnail__footer__key">{project.key}</h3>
                <h3 className="projects__thumbnail__footer__date">{project.date}</h3>
            </div>
        </div>
    );
}

export default ProjectThumbnail;