import { Link } from "react-router-dom";
import { HeaderBurger } from "../../components/HeaderBurger/HeaderBurger";

import "./projects.scss";

import landing1 from "../../assets/images/landing-1.jpg";
import landing2 from "../../assets/images/landing-2.jpg";
import landing3 from "../../assets/images/landing-3.jpg";
import landing4 from "../../assets/images/ladning-4.jpg";
import landing5 from "../../assets/images/landing-5.jpg";
import landing6 from "../../assets/images/ladning-6.jpg";
import landing7 from "../../assets/images/ladning-7.jpg";
import landing8 from "../../assets/images/landing-8.jpg";
import landing9 from "../../assets/images/landing-9.jpg";
import landing10 from "../../assets/images/landing-10.jpg";
import ghIcon from "../../assets/images/icons/github.png";

const Projects = () => {

    return(
        <section className="projects_section">
            <div className="container">
                <div className="projects_header">
                    <div className="home_left_section_header_logo">Портфолио</div>
                    <div className="projects_nav">
                        <Link to="/" className="projects_nav_link">Главная</Link>
                        <Link to="/about" className="projects_nav_link">Обо мне</Link>
                        <Link to="/projects" className="projects_nav_link">Проекты</Link>
                        <Link to="/contacts" className="projects_nav_link">Контакты</Link>
                    </div>
                    <div className="projects_nav_burger">
                        <HeaderBurger />
                    </div>
                </div>
                <div className="projects_main">
                    <h1 className="projects_main_title">Мои проекты</h1>
                    <div className="projects_wrapper_cards_first">

                        <div className="projects_card projects_card_one">
                            <div className="projects_card_img">
                                <img src={landing1} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Проект Shorter links</div>
                                <div className="projects_card_subtitle">
                                    Задача — интегрироваться с API-интерфейсом shrtcode, чтобы создавать сокращенные URL-адреса и отображать их.<br/>
                                    Пользователи должны иметь возможность:
                                        1. Посмотреть оптимальную версию сайта под все устройства.
                                        2. Сократить любой URL.
                                        3. Скопировать укороченную ссылку в буфер обмена в один клик.<br/>
                                    Реализовано с помощью React.js
                                    </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Shorter-links/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Shorter-links" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_two">
                            <div className="projects_card_img">
                                <img src={landing4} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">RealCo</div>
                                <div className="projects_card_subtitle">Верстка лендинг страницы по продаже недвижимости. Реализовано с помощью: HTML CSS JavaScript</div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Realco-Landing-page/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Realco-Landing-page" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_three">
                            <div className="projects_card_img">
                                <img src={landing3} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Салон красоты</div>
                                <div className="projects_card_subtitle">Верстка лендинг страницы салона красоты. Реализовано с помощью: HTML CSS JavaScript</div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Beaty-studio/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Beaty-studio" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_six">
                            <div className="projects_card_img">
                                <img src={landing10} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Discover collection of hoodies</div>
                                <div className="projects_card_subtitle">Верстка лендинга для бренда одежды. </div>
                                <div className="projects_card_buttons">
                                    <Link to="" className="projects_card_button">Сайт</Link>
                                    <Link to="" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_seven">
                            <div className="projects_card_img">
                                <img src={landing9} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Сайт портфолио</div>
                                <div className="projects_card_subtitle">Создание сайта портфолио с индивидуальным дизайном.</div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/React-Portfolio/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/React-Portfolio" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        

                    </div>

                    <div className="projects_wrapper_cards_second">

                    <div className="projects_card projects_card_four">
                            <div className="projects_card_img">
                                <img src={landing8} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Travel landing page</div>
                                <div className="projects_card_subtitle">Верстка лендинга сайта про туры в Японию. Реализовано с помощью: HTML CSS JavaScript</div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Travel-landing-page/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Travel-landing-page" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_five">
                            <div className="projects_card_img">
                                <img src={landing5} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Turnkey Repair</div>
                                <div className="projects_card_subtitle">Верстка лендинга для оказания услуг ремонта под ключ. Реализовано с помощью: HTML CSS</div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/landing_design-agency-main/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/landing_design-agency-main" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_eight">
                            <div className="projects_card_img">
                                <img src={landing2} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Поиск публикаций о компании по его ИНН</div>
                                <div className="projects_card_subtitle">Компания СКАН разработала новый API для поиска публикаций о компании (юридическом лице) в средствах массовой информации по его ИНН.<br/>Реализовано с помощью React.js</div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Scan-service/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Scan-service" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_nine">
                            <div className="projects_card_img">
                                <img src={landing6} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">ДОМ ЛУЧШЕЙ ЕДЫ</div>
                                <div className="projects_card_subtitle">Верстка лендинга для ресторана. <br/>Реализовано с помощью: HTML CSS</div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Restaurant-landing-page/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Restaurant-landing-page" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_ten">
                            <div className="projects_card_img">
                                <img src={landing7} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">NFT Landing page</div>
                                <div className="projects_card_subtitle">Верстка лендинг страницы для продаж NFT. Реализовано с помощью: Gulp Scss JavaScript</div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/KivaVladNFT-Dark-Responsive-Landing-page/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/KivaVladNFT-Dark-Responsive-Landing-page" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="projects_js">
                        <h2 className="projects_js_title">Приложения на Java Script</h2>
                        <div className="projects_js_wrapper">
                            <div className="projects_js_card projects_js_card_first">
                                <h3 className="projects_js_card_text">Kanban доска</h3>
                                <Link target="_blank" to="https://kivavlad.github.io/Kanban_board/" className="projects_js_card_button">Смотреть</Link>
                            </div>
                            <div className="projects_js_card projects_js_card_second">
                                <h3 className="projects_js_card_text">Секундомер</h3>
                                <Link target="_blank" to="https://kivavlad.github.io/Stopwatch-JavaScript/" className="projects_js_card_button">Смотреть</Link>
                            </div>
                            <div className="projects_js_card projects_js_card_third">
                                <h3 className="projects_js_card_text">Калькулятор</h3>
                                <Link target="_blank" to="https://kivavlad.github.io/iPhone-Calculator/" className="projects_js_card_button">Смотреть</Link>
                            </div>
                            <div className="projects_js_card projects_js_card_four">
                                <h3 className="projects_js_card_text">Список задач</h3>
                                <Link target="_blank" to="https://kivavlad.github.io/ToDoList/" className="projects_js_card_button">Смотреть</Link>
                            </div>
                            <div className="projects_js_card projects_js_card_five">
                                <h3 className="projects_js_card_text">2048</h3>
                                <Link target="_blank" to="https://kivavlad.github.io/2048/" className="projects_js_card_button">Смотреть</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="projects_footer">
                <div className="container">
                    <div className="projects_footer_content">
                        <h3 className="projects_footer_text">Больше проектов в моем Github</h3>
                        <Link target="_blank" to="https://github.com/KivaVlad"><img src={ghIcon} alt="gh" className="projects_footer_icon"/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;