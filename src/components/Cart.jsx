import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {Context} from "../components/Context";
function Cart(){
    const {cart} = useContext(Context)
    return(
        <div className="cart">
            <Link to={'/cart'} className="cart__title">Cart</Link>
            <span className="cart__amount">{cart.length}</span>
        </div>
    )
}
export default Cart