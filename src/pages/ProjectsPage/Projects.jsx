import { Link } from "react-router-dom";
import { HeaderBurger } from "../../components/HeaderBurger/HeaderBurger";

import "./projects.scss";

import landing1 from "../../assets/images/landing-1.jpg";
import landing2 from "../../assets/images/landing-2.jpg";
import landing3 from "../../assets/images/landing-3.jpg";
import landing4 from "../../assets/images/ladning-4.jpg";
import landing5 from "../../assets/images/landing-5.jpg";
import landing6 from "../../assets/images/ladning-6.png";
import landing7 from "../../assets/images/ladning-7.jpg";
import landing8 from "../../assets/images/landing-8.jpg";
import landing9 from "../../assets/images/landing-9.jpg";
import landing10 from "../../assets/images/landing-10.jpg";
import ghIcon from "../../assets/images/icons/github.png";

import htmlIcon from "../../assets/images/icons/html-icon.png";
import cssIcon from "../../assets/images/icons/css-icon.png";
import jsIcon from "../../assets/images/icons/js-icon.png";
import reactIcon from "../../assets/images/icons/react-icon.png";
import sassIcon from "../../assets/images/icons/sass-icon.png";

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
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={reactIcon}/><img src={cssIcon}/></span>
                                    </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Shorter-links/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Shorter-links" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_two">
                            <div className="projects_card_img">
                                <img src={landing3} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Салон красоты</div>
                                <div className="projects_card_subtitle">
                                    Основные задачи: <br/>
                                        1. Сверстать необходимые части интерфейса.
                                        2. Адаптировать свёрстанные страницы под мобильную версию.
                                        3. Добавить бургер-меню для мобильных устройств.
                                        4. Подключить слайдеры.<br/> 
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={htmlIcon}/><img src={cssIcon}/><img src={jsIcon}/></span>
                                </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Beaty-studio/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Beaty-studio" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_three">
                            <div className="projects_card_img">
                                <img src={landing7} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">NFT Landing page</div>
                                <div className="projects_card_subtitle">
                                    Основные задачи: <br/>
                                        1. Сверстать необходимые части интерфейса.
                                        2. Адаптировать свёрстанные страницы под мобильную версию.
                                        3. Добавить бургер-меню для мобильных устройств.
                                        4. Подключить слайдеры.<br/>  
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={htmlIcon}/><img src={sassIcon}/><img src={jsIcon}/></span>
                                </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/KivaVladNFT-Dark-Responsive-Landing-page/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/KivaVladNFT-Dark-Responsive-Landing-page" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_six">
                            <div className="projects_card_img">
                                <img src={landing10} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Личный кабинет организации</div>
                                <div className="projects_card_subtitle">
                                    Основные задачи: <br/>
                                    1. войти в ЛК; 
                                    2. создавать посты; 
                                    3. опубликовать созданный пост; 
                                    4. сохранить пост в черновики, для дальнейшей работой с редактированием; 
                                    5. видеть список созданных постов, которые хранятся в разных разделах; 
                                    6. редактировать/удалять посты; 
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={reactIcon}/><img src={jsIcon}/><img src={sassIcon}/></span>
                                </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://disk.yandex.ru/i/pmzR23ykRQYLPg" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://disk.yandex.ru/i/pmzR23ykRQYLPg" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_seven">
                            <div className="projects_card_img">
                                <img src={landing9} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Сайт портфолио</div>
                                <div className="projects_card_subtitle">
                                    Разработка и создание сайта портфорлио.<br/>
                                    Сайт написан с помощью React. Разбит на страницы и настроен роутинг с помощью React-Router-Dom. Добавил компонент lazy, для оптимизации производительности.
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={reactIcon}/><img src={sassIcon}/></span>    
                                </div>
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
                                <div className="projects_card_subtitle">
                                    Основные задачи: <br/>
                                        1. Сверстать необходимые части интерфейса.
                                        2. Адаптировать свёрстанные страницы под мобильную версию.
                                        3. Добавить бургер-меню для мобильных устройств.<br/>
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={htmlIcon}/><img src={cssIcon}/><img src={jsIcon}/></span>    
                                </div>
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
                                <div className="projects_card_subtitle">
                                    Основные задачи: <br/>
                                        1. Сверстать необходимые части интерфейса.
                                        2. Адаптировать свёрстанные страницы под мобильную версию.
                                        3. Добавить бургер-меню для мобильных устройств.<br/>  
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={htmlIcon}/><img src={cssIcon}/></span>
                                </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Turnkey-Repair-Landing-page/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Turnkey-Repair-Landing-page" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_eight">
                            <div className="projects_card_img">
                                <img src={landing2} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Поиск публикаций о компании по его ИНН</div>
                                <div className="projects_card_subtitle">
                                    Основные задачи: <br/>
                                    1. Сверстать необходимые части интерфейса.
                                    2. Адаптировать свёрстанные страницы под мобильную версию.
                                    3. Настроить роутинг и разделение прав: все страницы, кроме главной, должны быть доступны только зарегистрированному пользователю.
                                    4. Подключить бэкенд-часть к фронтенду, настроить отправку запросов.
                                    5. Отладить детали для гладкого UX: добавить лоадеры, валидацию форм и оповещения.<br/>
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={reactIcon}/><img src={sassIcon}/></span>
                                    </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Scan-service/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Scan-service" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_two">
                            <div className="projects_card_img">
                                <img src={landing4} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">RealCo</div>
                                <div className="projects_card_subtitle">
                                    Основные задачи: <br/>
                                    1. Сверстать необходимые части интерфейса.
                                    2. Адаптировать свёрстанные страницы под мобильную версию.
                                    3. Добавить бургер-меню для мобильных устройств.
                                    4. Подключить слайдеры.<br/> 
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={htmlIcon}/><img src={cssIcon}/><img src={jsIcon}/></span>
                                </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Realco-Landing-page/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Realco-Landing-page" className="projects_card_button">Код</Link>
                                </div>
                            </div>
                        </div>

                        <div className="projects_card projects_card_ten">
                            <div className="projects_card_img">
                                <img src={landing6} className="projects_image" alt="img"/>
                            </div>
                            <div className="projects_card_text">
                                <div className="projects_card_title">Проект Google books</div>
                                <div className="projects_card_subtitle">
                                    Основные задачи: <br/>
                                    1. По введенной пользователем подстроке производится поиск книг.
                                    2. Фильтрация по категориям.
                                    3. Сортировка. Рядом с селектом категорий находится селект с вариантами сортировки.
                                    4. Найденные книги отображаются карточками.
                                    5. При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные.<br/> 
                                    <span className="projects_card_subtitle_icon">Реализовано с помощью: <img src={reactIcon}/><img src={jsIcon}/><img src={sassIcon}/></span>
                                </div>
                                <div className="projects_card_buttons">
                                    <Link target="_blank" to="https://kivavlad.github.io/Google-books/" className="projects_card_button">Сайт</Link>
                                    <Link target="_blank" to="https://github.com/KivaVlad/Google-books" className="projects_card_button">Код</Link>
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