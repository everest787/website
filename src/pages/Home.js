import snowmanPicture from '../img/Snowman.jpg';
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate(); 
  const navigateAboutMe = () =>{ 
    document.getElementById("navi-toggle").checked = false;
    navigate("/about");
  }
  const navigateProjects = () =>{ 
    document.getElementById("navi-toggle").checked = false;
    navigate("/projects");
  }
  return (
    <div className="container container__home">
      <main className="personal">
        <h1 className="personal__name">
          Chelsea Everest
        </h1>
        <figure className="personal__item">
          <img src={snowmanPicture} alt="Snowman and I" className="personal__photo"/>
        </figure>
      </main>
      <div className="content">
        <div className="content__header">
          About Me
        </div>
        <div className="content__pitch">
          <p className="content__pitch-paragraph">
          I recieved a bachelors in Software Engineering from the University of Western Ontario in April of 2021.<br/><br/>
          During that time I did a 16 month internship at Autodata Solutions Company (now J.D. Power) where I 
          spent my time developing micro service test automation in Java. <br/><br/>
          After graduating I returned to that company to continue working for 6 months, but 
          eventually decided that I would like to move away from quality assurance and 
          spend more time developing.<br/><br/>
          So, I got a new position last year as a back end developer at a startup company called ActivateStaff 
          working with Node.js, MongoDB, Express and React. <br/><br/>
          I loved the chance to work on important features, and work directly with my coworkers 
          to solve problems. I am currently looking for somewhere that I can 
          participate in building something meaningful and contribute positively to a team of great 
          people. 

          </p>
        </div>
        <button onClick={navigateAboutMe} className="content__btn">
          Learn More
        </button>
      </div>
      <div className="content">
        <div className="content__header">
          Projects
        </div>
        <div className="content__projects">
          Once I decide what I'm gonna do with projects some content will be here
        </div>
        <button onClick={navigateProjects} className="content__btn">
          See what I'm up to
        </button>
      </div>
    </div>
  );
}

export default Home;
