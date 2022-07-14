import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import { CgClose } from 'react-icons/cg';

const CartModal = props => {

  const { qty, products, removeProduct, emptyCart, addProduct, placeOrder } = useContext(PizzaContext);
  const sumTotal = products.map(product => product.price * product.quantity).reduce((prev, curr) => prev + curr, 0);

  return(
    <div id="cart-modal-wrapper">
    <div id="cart-modal">
    <div className="cart-header">
    <h1>Kundkorg</h1>
    <span className="close-modal" onClick={() => props.toggleCartModal(!props.showCartModal)}><CgClose size={24} /></span>
    </div>
    {products.length > 0
      ? <table id="cart-table"><tbody>
        {products.map((product, index) => {
          return(<tr key={index}>
          <td className="cart-item-qty">{product.quantity} <span>st</span></td>
          <td>{product.name}</td>
          <td>{product.price} kr</td>
          <td className="end"><span className="remove-item" onClick={() => removeProduct(product.menuItemId)}>Ta bort</span></td>
          </tr>
        )})}
        <tr>
        <td className="no-border">Totalt: </td>
        <td className="end no-border"></td>
        <td className="no-border">{sumTotal} kr</td>
        <td className="no-border"></td>
        </tr>
        <tr>
        <td className="no-border"></td>
        <td className="no-border"></td>
        <td className="no-border"></td>
        <td className="end no-border actions"><button onClick={emptyCart}>Töm varukorgen</button><button onClick={placeOrder}>Lägg order</button></td>
        </tr>
        </tbody>
      </table>
      : <p>Din kundkorg är tom.</p>}
    </div>
    </div>
  )
}

export default CartModal;