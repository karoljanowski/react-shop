import React, { useContext, useState } from "react";
import Cart from "../components/Cart";
import Item from "../components/Item";
import data from '../data.js'


function ShopPage(){
    const [currentCategory, setCurrentCategory] = useState('All')
    const [categoryClassName, setCategoryClassName] = useState(0)
    const categories = [...new Set(data.map(product => product.category))];
    categories.unshift('All')
    const categoriesElements = categories.map((category, index) => {
        return <button onClick={() => handleCategoryBtn(category, index)} className={isActive(index)} key={index}>{category}</button>
    })
    function isActive(index){
        if(categoryClassName === index){
            return 'shop-page__category-active'
        }else{
            return 'shop-page__category'
        }
    }
    function handleCategoryBtn(category, index){
        setCategoryClassName(index)
        setCurrentCategory(category)
    }
    function currentData(){
        if(currentCategory === 'All'){
            return data
        }else{
            return data.filter(item => item.category === currentCategory)
        }
    }

    const productElement = currentData().map(element => {
        return <Item data={element} key={element.id} />
    })

    return (
        <div className="shop-page">
            <Cart />
            <h2 className="shop-page__title">Shop.</h2>
            <div className="shop-page__categories">
                {categoriesElements}
            </div>
            <h3 className="shop-page__category-name">{currentCategory}</h3>
            <div className="shop-page__products">
                {productElement}
            </div>
        </div>
    )
}
export default ShopPage