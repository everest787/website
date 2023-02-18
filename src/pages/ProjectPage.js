import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import ProjectDetails from "../components/ProjectDetails";

function ProjectPage() { 
    let { projectId } = useParams();
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/projects/" + projectId.replace(/ /g,''), {})
        .then((res) => res.json())
        .then((response) => {
            setData(response);
        })
        .catch((error) => console.log(error));
    }, []);


    return (  
        <div className="container container__projects">
            <div className="project-page">{data ? <ProjectDetails project={data}/> : <Loading />}</div>
        </div>
    );
}

export default ProjectPage;