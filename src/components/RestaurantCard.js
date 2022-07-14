import { Link } from 'react-router-dom';

const RestaurantCard = props => {

  const { id, name, address1, address2, latitude, longitude} = props.restaurant;

  return(
    <Link to={`/restaurants/restaurant/${id}`}>
     <div className="restaurant-card" key={id}>
        {/* <div className="restaurant-card-image-wrapper">
          <div className="restaurant-card-image"></div>
        </div> */}
        <div className="restaurant-card-content">
            <h3>{name}</h3>
            <span>{address1}</span>
            <span>{address2}</span>
            {/* <span>{longitude}</span>
            <span>{latitude}</span> */}
          </div>
        </div>
        </Link>
  )
}

export default RestaurantCard;