import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./headerBurger.scss";

export const HeaderBurger = () => {
    let [activeState, setActiveState] = useState(false);

    return(
        <>
            <div onClick={ () => setActiveState(activeState = !activeState) } className='header_burger'>
                <span className='burger_line burger_line_first'></span>
                <span className='burger_line burger_line_second'></span>
                <span className='burger_line burger_line_third'></span>
            </div>
            <div  className={`header_nav ${activeState && 'header_nav_active'}`}>
                <div className="header_links">
                    <NavLink to="/" onClick={() => setActiveState(activeState = !activeState)} className="header_link">Главная</NavLink>
                    <NavLink to="/about" onClick={() => setActiveState(activeState = !activeState)} className="header_link">Обо мне</NavLink>
                    <NavLink to="/projects" onClick={() => setActiveState(activeState = !activeState)} className="header_link">Проекты</NavLink>
                    <NavLink to="/contacts" onClick={() => setActiveState(activeState = !activeState)} className="header_link">Контакты</NavLink>
                </div>
                <div onClick={() => setActiveState(activeState = !activeState)} className='header_nav_close'>
                    <span className='header_nav_close_line'></span>
                    <span className='header_nav_close_line'></span>
                </div>
            </div>
        </>
    )
}