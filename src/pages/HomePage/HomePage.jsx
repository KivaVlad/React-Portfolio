import { Link, NavLink } from "react-router-dom";
import heroPhoto from "../../assets/images/photo.jpg";
import { HeaderBurger } from "../../components/HeaderBurger/HeaderBurger";
import "./homepage.scss";

const HomePage = () => {

    return(
        <section className="home">
                <div className="home_left_section">
                    <div className="home_left_section_container">
                        <div className="home_left_section_header">
                            <div className="home_left_section_header_logo">Портфолио</div>
                            <div className="home_left_section_header_burger">
                                <HeaderBurger />
                            </div>
                        </div>
                        <div className="home_left_section_main">
                            <h1 className="home_title">Frontend разработчик <br/>Кива Владислав</h1>
                            <p className="home_subtitle">Добро пожаловать в мой сайт портфолио. У меня для вас отличная новость! Вы нашли человека, который сможет реализовать огромный спектр задач, связанных с разработкой сайтов.</p>

                            <Link to="/projects" className="home_button">Мои проекты</Link>
                        </div>
                    </div>
                </div>

                <div className="home_right_section">
                    <div className="home_right_section_container">
                        <div className="home_right_section_header">
                            <div className="home_right_section_header_nav">
                                <NavLink to="/" className="home_right_section_header_link">Главная</NavLink>
                                <NavLink to="/about" className="home_right_section_header_link">Обо мне</NavLink>
                                <NavLink to="/projects" className="home_right_section_header_link">Проекты</NavLink>
                                <NavLink to="/contacts" className="home_right_section_header_link">Контакты</NavLink>
                            </div>
                        </div>
                        <div className="home_right_section_main">
                            <div className="home_right_section_photo">
                                <img src={heroPhoto} className="home_right_section_image"/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default HomePage