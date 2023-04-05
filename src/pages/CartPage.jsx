import React, { useContext } from "react";
import {Context} from "../components/Context";
import trashSolid from '/trash-solid.svg'

function CartPage(){
    const {cart, deleteFromCart} = useContext(Context)
    const cartElements = cart.map((item, index) => {
        return <div key={index} className="cart-page__item">
            <span>{index + 1}</span>
            <div className="cart-page__desc">
                <p className="cart-page__name">{item.title}</p>
                <p className="cart-page__price">{item.price}$</p>
            </div>
            <img onClick={() => deleteFromCart(index)} src={trashSolid} className="cart-page__delete" />
        </div>
    })

    function totalPrice(){
        let price = 0
        cart.forEach(element => {
            price += element.price
        });
        return price
    }

    return(
        <div className="cart-page">
            <h2 className="cart-page__title">Cart.</h2>
            <div className="cart-page__items">
                {cartElements}
            </div>
            <div className="cart-page__total">
                <div className="cart-page__total-price">
                    <span>Total</span>
                    <span>{totalPrice()}</span>
                </div>
                <button className="cart-page__order">Order</button>
            </div>
        </div>
    )
}
export default CartPage