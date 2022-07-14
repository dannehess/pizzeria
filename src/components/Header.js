import Logo from '../components/Logo';
import Nav from '../components/Nav';
import CartQty from '../components/CartQty';

const Header = () => {
  return(
    <header>
    <div className="content">
      <Logo title="PizzaApp" />
      <Nav />
      <CartQty />
      </div>
    </header>
  )
}

export default Header;