import { useContext, useState } from 'react';
import { PizzaContext } from '../context/PizzaContext';

const PizzaCard = props => {

  const { id, name, category, topping, price, rank, qty} = props.pizza;
  const [productQty, setProductQty] = useState(0);
  const { addProduct } = useContext(PizzaContext);

  return(
     <div className="pizza-card" key={id}>
            <h3>{id}. {name} ({category}) <span>{rank ? `RANK: ${rank}` : ''}</span></h3>
        <div className="pizza-card-content">
            <div className="pizza-card-info">
            <span>{topping ? topping.join(', ') : ''}</span>
            <span className="price">{price !== 0 ? `${price}kr` : 'Gratis'}</span>
            </div>
            <div className="pizza-card-actions">
            <input type="number" name="qty" min="0" value={qty? qty : productQty} onChange={e => setProductQty(e.target.value)} />
            <button className="add-pizza-btn" onClick={() => addProduct(props.pizza, productQty)}>Lägg till</button>
            </div>
          </div>
        </div>
  )
}

export default PizzaCard;