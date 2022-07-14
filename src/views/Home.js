import { Link } from 'react-router-dom';

const Home = props => {

return(
  <main className="home">
  <div id="home-wrapper">
  <h1 id="home-heading">PizzaApp</h1>
  <h2 id="home-subheading">Välj restaurang för att gå vidare</h2>
  <Link to="/restaurants" className="btn">Välj restaurang</Link>
  </div>
  </main>
  )
}

export default Home;