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
      <div className="content">
        <main className="personal">
          <h1 className="personal__name">
            Chelsea Everest
          </h1>
          <figure className="personal__photo">
            <img src={snowmanPicture} alt="Snowman and I" className="main__photo"/>
          </figure>
        </main>

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
