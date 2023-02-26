import childhood from '../img/childhood.jpg';
import hackathon from '../img/hackathon.jpg';
import maya from '../img/maya.jpg';
import { useNavigate } from "react-router-dom";

function AboutMe() {
  let navigate = useNavigate(); 
  const navigateProjects = () =>{ 
    document.getElementById("navi-toggle").checked = false;
    navigate("/projects");
  }
    return (
      <div className="container container__about">
        <div className="about">
          <header className="about__header">
            <h1 className="about__header-text">
              More About Me
            </h1>
          </header>
          <div className="about__content about__content-right">            
            <div className="about__content__img hexagon__background">
              <figure className="hexagon__figure">
                <img src={childhood} alt="Grade 4"/>
              </figure>
            </div>
            <p className="about__content__paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;
            I grew up in Sudbury Ontario with a love of animals and technology. 

            I would wake up early before school so that I could play 30 minutes of Runescape while 
            I ate my breakfast, soon after that I started playing a lot of the video games that 
            I would see my brother playing,
            and was eventually able to convince my parents to let me have my own xbox after fighting 
            with my brother for time on it.

            I didn't pick up programming until Grade 11, when I needed to pick a course between 
            interior design, woodworking, and computer technologies. 
            In that course, plus the Grade 12 equivalent, I learned the basics of Java and my love of programming was born. 
            </p>
          </div>
          <div className="about__content about__content-left">            
            <div className="about__content__img hexagon__background">
              <figure className="hexagon__figure">
                <img src={hackathon} alt="Hackathon"/>
              </figure>
            </div>
            <p className="about__content__paragraph">
            But it didn't stick initially, and I wanted to be different from my friends who were going into computer science, 
            so I applied to universities for Chemical Engineering initially. It was only after getting into Western, 
            and having a general engineering first year that I realized I wasn't very good at chemistry anymore. 
            But I was very good at my programming course, and so decided to go into Software after that.<br/> 

            University wasn't easy, and if I'm honest I finished my degree with a perfect 75% average. 
            But it taught me a lot of great skills and I met a lot of great people. 
            </p>
          </div>
          <div className="about__content about__content-right">
            <div className="about__content__img hexagon__background">
              <figure className="hexagon__figure">
                <img src={maya} alt="My dog"/>
              </figure>
            </div>
            <p className="about__content__paragraph">
            &nbsp;&nbsp;&nbsp;&nbsp;
            I graduated in April 2021, after that I went back to my internship company for 6 months, 
            but decided I didn't want to be working in quality assurance,  I wanted to be a developer. 
            So I worked at a startup company for a year as a back end developer and enjoyed that immensely more. 

            As time goes on, I become more and more interested in new technologies and problem solving, 
            and I developed this website as a starting point to sharing the projects that I want to work on and 
            the things that I find interesting. I love spending time with my dog Maya (pictured right), 
            and I am ultimately looking forward to what the future may bring and the people I will get the 
            opportunity to meet. 
            </p>

          </div>

          <h2 className="about__content__header">
            Come have a look at what I'm working on!
          </h2>
          <div className="about__content__container">
          <button onClick={navigateProjects} className="about__content__container__btn">
            Projects
          </button>
        </div>
        </div>
        
      </div>
    );
  }
  
  export default AboutMe;
  