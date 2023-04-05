import React, { useState } from "react";
import location from '/icons/location.svg'
import phone from '/icons/phone.svg'

function ContactPage(){

    const [showMessage, setShowMessage] = useState(false)

    function handleClick(e){
        e.preventDefault()
        setShowMessage(true)
    }

    return(
        <div className="contact-page">
            <h2 className="contact-page__title">
                Contact.
            </h2>
            <span className="contact-page__info"><img src={location} />3490 Pride Avenue, Brooklyn</span>
            <span className="contact-page__info"><img src={phone} />347-446-9092</span>
            <h3 className="contact-page__message">Message us!</h3>
            <form className="contact-page__form">
                <input className="contact-page__input" type="text" placeholder="Name"/>
                <input className="contact-page__input" type="mail" placeholder="E-mail"/>
                <textarea className="contact-page__input" name="message" placeholder="Message"></textarea>
                <button onClick={handleClick} className="contact-page__btn">Send</button>
            </form>
            {showMessage && <p className="contact-page__message2">Thank you for contact</p>}
        </div>
    )
}
export default ContactPage