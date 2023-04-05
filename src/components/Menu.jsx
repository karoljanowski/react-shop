import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Menu(){
    const [active, setActive] = useState(false)
    const [currentOption, setCurrentOption] = useState(null)
    const currentLocation = useLocation()

    const options = [
        {name: 'handmade', path: '/'},
        {name: 'shop', path: '/shop'},
        {name: 'about us', path: 'about'},
        {name: 'contact', path:'contact'}
    ]
    const elements = options.map((element, index) => {
        return <Link key={index} to={element.path} className={isCurrentOption(index)} onClick={() => handleOptionClick(index)}>{element.name}</Link>
    })
    function handleOptionClick(index){
        setCurrentOption(index)
        setActive(false)
    }
    function isCurrentOption(index){
        if(currentOption === index){
            return 'menu__option menu__option-active'
        }else{
            return 'menu__option'
        }
    }

    useEffect(() => {
        const location = currentLocation.pathname
        options.forEach((option, index) => {
            if(location.includes(option.path)){
                setCurrentOption(index)
            }else if(location === '/order'){
                setCurrentOption(1)
            }
        })
    }, [])

    return(
        <div className="menu">
            <div className="menu__main">
                <span className="menu__logo">handmade</span>
                <div className={active ? 'menu__btn menu__btn-active' : 'menu__btn'} onClick={() => setActive(prev => !prev)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={active ? 'menu__open menu__open-active' : 'menu__open'}>
                {elements}
            </div>
        </div>
    )
}
export default Menu