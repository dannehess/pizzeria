import { useState, useContext } from 'react';
import CartModal from '../components/CartModal';
import { FiShoppingCart } from 'react-icons/fi';
import { PizzaContext } from '../context/PizzaContext';

const CartQty = () => {

  const [showCartModal, setShowCartModal] = useState(false);
  const { qty, products } = useContext(PizzaContext);

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
    if(showCartModal === true && products.length === 0){
      window.location.reload();
    }
  }

  return(
    <div id="cartqty-wrapper">
      <span id="cartqty">{qty}<FiShoppingCart size={18} onClick={() => setShowCartModal(!showCartModal)} /></span>
      {showCartModal ? <CartModal showCartModal={showCartModal} toggleCartModal={toggleCartModal} /> : null }
    </div>
  )
}

export default CartQty;