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
    <div className="container container__header">
      <header className="header">
        <div className="header__navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <button onClick={navigateHome}>Home</button>
              </li>
              <li className="navigation__item">
                <button onClick={navigateAboutMe}>About Me</button>
              </li>
              <li className="navigation__item">
                <button onClick={navigateProjects}>Projects</button>
              </li>
            </ul>
          </nav>
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
