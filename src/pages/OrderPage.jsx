import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../components/Context";

function OrderPage(){
    const {clearCart} = useContext(Context)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "", 
        street: "",
        city: "",
        zipcode: "",
        email: ""
    })
    const [displayModal, setDisplayModal] = useState(false)
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    function handleChange(e){
        setFormData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    function handleClick(e){
        e.preventDefault()
        const errors = validate(formData);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            setDisplayModal(true)
        }
    }

    function validate(values){
        let errors = {}
        if (!values.firstName) {
            errors.firstName = 'First name is required';
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required';
        }
        if (!values.street) {
            errors.street = 'Street is required';
        }
        if (!values.city) {
            errors.city = 'City is required';
        }
        if (!values.zipcode) {
            errors.zipcode = 'Zip code is required';
        }
        if (!values.email) {
            errors.email = 'E-mail is required';
        }
    
        return errors;

    }
    function handleClose(){
        setDisplayModal(false)
        clearCart()
        navigate('/shop')
    }

    return(
        <div className="order-page">
            <h2 className="order-page__title">Order.</h2>
            <form className="order-page__form">
                <input className={!errors.firstName ? 'order-page__input' : 'order-page__error'} type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={formData.firstName}/>
                <input className={!errors.lastName ? 'order-page__input' : 'order-page__error'} type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={formData.lastName}/>
                <input className={!errors.street ? 'order-page__input' : 'order-page__error'} type="text" placeholder="Street" name="street" onChange={handleChange} value={formData.street}/>
                <input className={!errors.city ? 'order-page__input' : 'order-page__error'} type="text" placeholder="City" name="city" onChange={handleChange} value={formData.city}/>
                <input className={!errors.zipcode ? 'order-page__input' : 'order-page__error'} type="text" placeholder="Zip Code" name="zipcode" onChange={handleChange} value={formData.zipcode}/>
                <input className={!errors.email ? 'order-page__input' : 'order-page__error'} type="text" placeholder="E-mail" name="email" onChange={handleChange} value={formData.email}/>
                <button onClick={handleClick} className="order-page__button">Order</button>
            </form>
            {displayModal && 
                <div className="order-page__modal">
                    <div className="order-page__modal-content">
                        <p>Thank you {formData.firstName}</p>
                        <p>We sent all details on {formData.email}</p>
                        <button className="order-page__modal-btn" onClick={handleClose}>Close</button>
                    </div>
                </div>
            }
        </div>
    )
}
export default OrderPage