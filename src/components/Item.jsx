import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";


function Item(prop){
    const {addToCart} = useContext(Context)
    const {id, image, title, price} = prop.data
    console
    return (
        <div className="item">
            <img className="item__img" src={image}/>
            <div className="item__desc">
                <Link to={`/shop/${id}`} className="item__name">{title}</Link>
                <span className="item__price">{price}$</span>
                <button onClick={() => addToCart(id)} className="item__btn">Add to cart</button>
            </div>
        </div>
    )
}
export default Item