import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <Link to="/">Hem</Link>
      <Link to="/restaurants">Pizzerior</Link>
    </nav>
  )
}

export default Nav;