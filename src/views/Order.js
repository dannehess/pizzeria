import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import { useParams } from "react-router-dom";

const Order = () => {

  const { orderRes, getRestaurantById } = useContext(PizzaContext);

  const { cart, esitmatedDelivery, orderedAt, orderId, totalPrice } = orderRes;
  const { id } = useParams();

  const formatDate = dateStr => {
    const date = new Date(dateStr);
    const options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    return date.toLocaleDateString('UTC', options);
  }

  if(orderId == id){
        return(
        <main>
        <div className="content">
        <div className="order-card">
        <h1>Ordernr: {orderId}</h1>
        <h3>Beställd: {formatDate(orderedAt)}</h3>
        <h3>Förväntad leverans: {formatDate(esitmatedDelivery)}</h3>
        <h3>Summa: {totalPrice} kr</h3>
        </div>
        </div>
        </main>
      )
  }
  else{
    return(<div className="centered-centered">
    <h1>Beställningen finns inte  ...</h1>
    </div>
    )
  }
}

export default Order;