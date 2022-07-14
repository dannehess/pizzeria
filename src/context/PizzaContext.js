import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { orderByDistance, getDistance } from 'geolib';

export const PizzaContext = createContext();

export const PizzaContextProvider = props => {

    const activeOrder = JSON.parse(localStorage.getItem('orderres')) || {};
    const orderStatus = JSON.parse(localStorage.getItem('order')) || [];

    const [location, setLocation] = useState({});
    const [restaurants, setRestaurants] = useState([]);
    const [currentRestaurant, setCurrentRestaurant] = useState({});
    const [currentMenu, setCurrentMenu] = useState([]);
    const [products, setProducts] = useState([]);  
    const [order, setOrder] = useState([]);
    const [orderRes, setOrderRes] = useState(activeOrder);
    const [qty, setQty] = useState(0);  

    const { id } = useParams();

    useEffect(() => {
        getRestaurants();
        setCurrentLocation();
    }, [])

    useEffect(() => {
        getRestaurantById(id);
    }, [id])

    useEffect(() => {
        const sumQty = products.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
        setQty(sumQty); 
    }, [products]);

    const getRestaurants = async() => {
        try{
            const response = await fetch('https://private-anon-b2381a6c8a-pizzaapp.apiary-mock.com/restaurants/');
            const data = await response.json();

            if(location.latitude && location.longitude){
                const orderedRestaurants = orderByDistance({ latitude: location.latitude, longitude: location.longitude }, data);
                setRestaurants(orderedRestaurants);
            }else{
                setRestaurants(data);          
            }

        }catch(error){
            return [];
        }
    }

    const setCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition(pos => {

            setLocation({
                longitude: pos.coords.longitude,
                latitude: pos.coords.latitude
            })
        })
    }

    const getRestaurantById = async(id) => {
        getMenuByRestaurantId(id);
        try{
            const response = await fetch(`https://private-anon-b2381a6c8a-pizzaapp.apiary-mock.com/restaurants/${id}`);
            const data = await response.json();
            setCurrentRestaurant(data);
        }catch(error){
            return {};
        }
    }

    const getMenuByRestaurantId = async(id) => {
        try{
            const response = await fetch(`https://private-anon-b2381a6c8a-pizzaapp.apiary-mock.com/restaurants/${id}/menu?category=Pizza&orderBy=rank`);
            const data = await response.json();
            setCurrentMenu(data);
        }catch(error){
            return [];
        }
    }

    const addProduct = (product, productQty) => {
        const firstDigit = String(productQty)[0];
        const firstDigitNum = Number(firstDigit);
        
        if(productQty !== 0 && firstDigitNum !== 0){
            const newProduct = { menuItemId: product.id, name: product.name, price: product.price, quantity: Number(productQty) }
            const exists = products.some(item => item.menuItemId === newProduct.menuItemId ? true : false );
                    
                if(exists === true){
                    const newProductExist = products.map(item => item.menuItemId == newProduct.menuItemId ? {...newProduct} : item);
                    setProducts(newProductExist, ...products);
                }else{
                    setProducts([newProduct, ...products]);
                    setOrder([newProduct, ...currentMenu]);
                }
        }else{
            window.alert("Ange ett giltigt antal");
        }
    };

    const removeProduct = productId => {
        const newProducts = products.filter(item => item.menuItemId !== productId);
        setProducts(newProducts);
        setQty();
    }

    const emptyCart = e => {
        let choice = window.confirm("Är du säker?");
            if (!choice) {
                e.preventDefault();
            }else{
                setProducts([]);
                setQty(0);
            }
    }

    const placeOrder = async() => {

        const orderObj = {
            cart: [...products],
            restaurantId: currentRestaurant.id
        }
        
        try{
            const response = await axios.post('https://private-anon-3cd4a9870d-pizzaapp.apiary-mock.com/orders/', orderObj);
            if(response.status === 200){
                setOrderRes(response.data);
                localStorage.setItem('orderres', JSON.stringify(response.data));
                window.location = `/order/${response.data.orderId}`;
            }

        }catch(error){
            return [];
        }
    }
     
    return (
        <PizzaContext.Provider value={{restaurants, 
                                       getRestaurantById,
                                       currentRestaurant,
                                       setCurrentRestaurant,
                                       getMenuByRestaurantId,
                                       currentMenu,
                                       addProduct,
                                       removeProduct,
                                       products,
                                       qty,
                                       emptyCart,
                                       placeOrder,
                                       orderRes
                                    }}>
            {props.children}
        </PizzaContext.Provider>
    );
};