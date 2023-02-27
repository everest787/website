import React from "react";
import ProjectThumbnail from "../components/ProjectThumbnail";
import { Link } from "react-router-dom";

function Projects() {
  const website = {
    title: "This website",
    desc: "A long awaited project that I have not found the time for until now. I learned CSS, and used that knowledge to design a website that I can use for future projects going forward!",
    body: "zdxfcgvh",
    imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    date: "2023/02/25"
  }

    return (
      <div className="container container__projects">
        <div className="projects hexagon-background">
          <div className="projects__content">
            <h1 className="projects__content__header">
              Welcome! Check out some of the things I have been working on recently!
            </h1>
            <Link to="/projects/myWebsite" state={{ data: website }} className="projects__content__link">
              <ProjectThumbnail project={website}/>
            </Link>
          </div>

        </div>
      </div>
    );
  }
  
  export default Projects;
  