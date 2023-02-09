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
        <a href="#contact" className="header__contact">Contact Me</a>
      </header>
    </div>

    <div className="contact-me" id="contact">
      <div className="contact-me__content">
        <h2 className="heading-secondary">
          Contact Me
        </h2>
        <h3 className="heading-tertiary">
          Fill in your name, email, and a message and I will get back to you as soon as I can!
        </h3>

        <div className="contact-me__form">
          <form action="#" className="form">
            <div className="form__group">
              <input type="text" className="form__input" placeholder="Full Name" id="name" required />
              <label htmlFor="name" className="form_label">Full Name</label>
            </div>
            <div className="form__group">
              <input type="email" className="form__input" placeholder="Email" id="email" required />
              <label htmlFor="email" className="form_label">Email Address</label>
            </div>
          </form>
        </div>

        <a href="#" className="contact-me__close">&times;</a>
      </div>
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
