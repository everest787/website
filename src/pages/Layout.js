import { Outlet, useNavigate } from "react-router-dom";
import snowmanPicture from '../img/Snowman.jpg';

function Layout() {
  let navigate = useNavigate(); 
  const navigateHome = () =>{ 
    navigate("/");
  }
  const navigateAboutMe = () =>{ 
    navigate("/about");
  }
  const navigateProjects = () =>{ 
    navigate("/projects");
  }
  return (
    <>
    <div className="container">
      <header className="header">
        <div className="header__navigation">
          X
        </div>
        <button className="header__contact">Contact Me</button>
      </header>
      <main className="personal">
        <h1 className="personal__name">
          Chelsea Everest
        </h1>
        <figure className="personal__item">
          <img src={snowmanPicture} alt="Snowman and I" className="personal__photo"/>
        </figure>
      </main>
      <div className="content">
        <div className="content__about-me">
          About Me
        </div>
        <div className="content__pitch">
          <p className="content__pitch-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed urna iaculis, pretium mauris id, imperdiet diam. Donec consectetur interdum libero eget ornare. Nunc volutpat fermentum elementum. Fusce dignissim aliquet enim et ultrices. Praesent venenatis non magna at venenatis. Pellentesque ut diam porttitor, mollis quam et, ultricies lectus. Maecenas cursus justo sit amet vehicula vulputate.
          </p>
        </div>
      </div>
    </div>
      <nav>
        <table>
          <tr>
            <td>
              <button onClick={navigateHome}>Home</button>
            </td>
            <td>
              <button onClick={navigateAboutMe}>About Me</button>
            </td>
            <td>
              <button onClick={navigateProjects}>Projects</button>
            </td>
          </tr>
        </table>
      </nav>

      <Outlet />
    </>
  )
};


export default Layout;
