import { Link } from 'react-router-dom';

const Logo = props => {
  return(
    <Link to="/">
      <span id="logo">{props.title}</span>
    </Link>
  )
}

export default Logo;