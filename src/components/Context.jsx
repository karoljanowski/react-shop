import React, { useState } from "react";
const Context = React.createContext()
import data from "../data";


function ContextProvider(props){
    const [cart, setCart] = useState([])

    function addToCart(id){
        const item = data.find(item => item.id == id)
        setCart(prev => [...prev, item])
    }
    function deleteFromCart(index){
        const newItems = cart.filter((item, i) => i !== index);
        setCart(newItems);
    }
    return(
        <Context.Provider value={{cart, addToCart, deleteFromCart}}>
            {props.children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}