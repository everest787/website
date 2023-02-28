import { useLocation } from 'react-router-dom'
import keyboardPicture from '../../img/projects/keyboard.jpg';

function Website() {   
    const location = useLocation();
    const { data } = location.state;
    return (  
        <div className="container container__home">
            <div className="container container__projects">
                <div className="project-page lined-background">
                    <div className="project-page__project-details">
                        <img className="project-page__project-details__img" src={keyboardPicture} alt="post" />
                        <h1 className="project-page__project-details__heading">{data.title}</h1>
                        <h3 className="project-page__project-details__date">{data.date}</h3>
                        <h3 className="project-page__project-details__key">{data.key}</h3>
                        <p className="project-page__project-details__content">this is some content</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Website;