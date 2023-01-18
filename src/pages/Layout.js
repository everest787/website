import { Outlet, useNavigate } from "react-router-dom";

function Layout() {
  let navigate = useNavigate(); 
  const navigateHome = () =>{ 
    navigate("/");
  }
  const navigateAboutMe = () =>{ 
    navigate("/about");
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={navigateHome}>Home</button>
          </li>
          <li>
            <button onClick={navigateAboutMe}>About Me</button>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};


export default Layout;
