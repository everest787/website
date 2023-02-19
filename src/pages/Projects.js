import React from "react";
import Loading from "../components/Loading";
import ProjectThumbnail from "../components/ProjectThumbnail";
import { Link } from "react-router-dom";

function Projects() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/projects", {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

    return (
      <div className="container container__projects">
        <div className="projects">
          {data ? 
            data.map((post, index) => (
              <Link to={post.title} className="projects__link">
                <ProjectThumbnail project={post}/>
              </Link>
            ))
            : <Loading />}
        </div>
      </div>
    );
  }
  
  export default Projects;
  