import React from "react";
import mainPageImg from '/mainPageImg.jpg'

function MainPage(){
    return (
        <div className="main-page"> 
            <div className="main-page__top">

                <h1 className="main-page__title">Handmade.</h1>
                <p className="main-page__desc">Handmade product <span className="main-page__bold">made</span> with love.</p>
            </div>
            <div className="main-page__bottom">

                <p className="main-page__desc2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed reiciendis perspiciatis, inventore odio voluptatem reprehenderit deserunt cum saepe. Quia porro rem quis itaque ipsa distinctio ad, deleniti consequuntur quo! Iusto!</p>
                <img src={mainPageImg} alt="" className="main-page__img" />
            </div>
        </div>
    )
}
export default MainPage