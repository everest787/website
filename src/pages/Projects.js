import React from "react";
import Loading from "../components/Loading";
import ProjectThumbnail from "../components/ProjectThumbnail";
import { Link } from "react-router-dom";
import projectdata from "../data/projects.json";

function Projects() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    setData(projectdata.projects.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

    return (
      <div className="container container__projects">
        <div className="projects hexagon-background">
          <div className="projects__content">
            <h1 className="projects__content__header">
              Welcome! Check out some of the things I have been working on recently!
            </h1>
            {data ? 
            data.map((post, index) => (
              <Link to={post.title} className="projects__content__link">
                <ProjectThumbnail project={post}/>
              </Link>
            ))
            : <Loading />}
          </div>

        </div>
      </div>
    );
  }
  
  export default Projects;
  