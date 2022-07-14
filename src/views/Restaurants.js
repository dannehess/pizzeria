import { useContext } from 'react';
import { PizzaContext } from '../context/PizzaContext';
import RestaurantCard from '../components/RestaurantCard';

const Restaurants = () => {
  
  const {restaurants} = useContext(PizzaContext);
  
  return (
    <main>
    <div className="content">
    <h2>Välj restaurang:</h2>
    <div id="restaurant-list">
    {restaurants && restaurants.map((restaurant, index) => {
      return (
        <RestaurantCard restaurant={restaurant} key={index} />
      )
    })}
      </div>
      </div>
    </main>
  )
}

export default Restaurants;