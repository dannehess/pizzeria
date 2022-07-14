import { useContext, useEffect } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import PizzaCard from '../components/PizzaCard';

const Restaurant = () => {
  
  const { getRestaurantById, currentMenu, currentRestaurant, order } = useContext(PizzaContext);

  return(
    <main>
        <div className="content">
        <h2>{currentRestaurant.name} - Meny</h2>
          <div className="pizza-list">
              {currentMenu && currentMenu.map((pizza, index) => <PizzaCard pizza={pizza} key={index} />)}
          </div>
        </div>
      </main>  
  )
}


export default Restaurant;