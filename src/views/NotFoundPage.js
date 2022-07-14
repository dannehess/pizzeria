import pizza from '../assets/images/pizza404.png';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {

  return(
    <div className="centered-centered">
    <div id="not-found-wrapper">
      <div id="not-found-letters">
      <h1 className="not-found-letter">4</h1>
    <img src={pizza} id="not-found-pizza"/>
      <h1 className="not-found-letter">4</h1>
    </div>
    <h1 id="not-found-heading">Sidan kan inte hittas</h1>
    <Link to="/" className="not-found-link">Gå till startsidan</Link>
    </div>
    </div>
  )
}

export default NotFoundPage;