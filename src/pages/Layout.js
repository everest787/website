import { Outlet, useNavigate } from "react-router-dom";

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
    <div className="container__header">
      <header className="header">
        <div className="header__navigation">
          X
        </div>
        <button className="header__contact">Contact Me</button>
      </header>
    </div>
      {/* <nav>
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
      </nav> */}

      <Outlet />
    </>
  )
};


export default Layout;
