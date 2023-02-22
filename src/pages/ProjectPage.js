import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProjectDetails from "../components/ProjectDetails";
import projectdata from "../data/projects.json";

function ProjectPage() { 
    let { projectId } = useParams();
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const data = projectdata.projects.filter(
            function(data){ return data.title.replace(/ /g,'') === projectId }
        );
        setData(data[0]);
      }, [projectId]);


    return (  
        <div className="container container__projects">
            <div className="project-page">{data ? <ProjectDetails project={data}/> : <Loading />}</div>
        </div>
    );
}

export default ProjectPage;