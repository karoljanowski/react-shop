import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import {Context} from "../components/Context";
import Cart from "../components/Cart";

function ItemPage(){
    const {id} = useParams()
    const {addToCart} = useContext(Context)
    const item = data.find(item => item.id == id)
    const reviews = item.comments.map((comment, index) => {
        return <div key={index} className="item-page__review">
            <span className="item-page__author">{comment.author}</span>
            <p className="item-page__text">{comment.text}</p>
        </div>
    })
    
    return(
        <div className="item-page">
            <Cart />
            <h2 className="item-page__title">{item.title}</h2>
            <img src={item.image} className="item-page__img" />
            <p className="item-page__desc">{item.description}</p>
            <span className="item-page__price">{item.price}</span>
            <button className="item-page__btn" onClick={() => addToCart(id)}>Add to cart</button>
            <h3 className="item-page__reviews-title">Reviews</h3>
            <div className="item-page__reviews">
                {reviews}
            </div>
        </div>
    )
}
export default ItemPage