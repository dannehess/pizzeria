import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Restaurants from './views/Restaurants';
import Restaurant from './views/Restaurant';
import Order from './views/Order';
import NotFoundPage from './views/NotFoundPage';
import { PizzaContextProvider } from './context/PizzaContext';

const App = () => {

  return(
    <PizzaContextProvider>
    <div id="wrapper">
    <Router>
    <Header />
         <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/restaurants' element={<Restaurants />} />
            <Route exact path='/restaurants/restaurant/:id' element={<Restaurant />} />
            <Route exact path='/order/:id' element={<Order />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    </Router>
    </div>
    </PizzaContextProvider>
  )
}

export default App;