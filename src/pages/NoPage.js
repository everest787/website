import { useNavigate } from "react-router-dom";

function NoPage() {
  let navigate = useNavigate(); 
  const navigateHome = () =>{ 
    navigate("/");
  }
  return (
    <div className="container container__home">
      <div className="not-found">
        <div className="not-found__content">
          <h1 className="not-found__content__header">
            404
          </h1>
          <h2 className="not-found__content__sub-header">
            Oops! Looks like this page doesn't exist yet.
          </h2>
          <button onClick={navigateHome} className="not-found__content__home">
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
