import { useState } from "react";

import { HeaderBurger } from "../../components/HeaderBurger/HeaderBurger";
import { Link } from "react-router-dom";
import "./about.scss";

import aboutImage from "../../assets/images/about_image.png";
import htmlIcon from "../../assets/images/icons/html-icon.png";
import cssIcon from "../../assets/images/icons/css-icon.png";
import jsIcon from "../../assets/images/icons/js-icon.png";
import reactIcon from "../../assets/images/icons/react-icon.png";
import sassIcon from "../../assets/images/icons/sass-icon.png";
import gitIcon from "../../assets/images/icons/git-icon.png";
import cvIcom from "../../assets/images/icons/cv.png";


const About = () => {
    const [about, setAbout] = useState(true);
    const [skills, setSkills] = useState(false);
    const [education, setEducation] = useState(false);


    return(
        <section className="about">
            <div className="container">

                <div className="about_header">
                    <div className="home_left_section_header_logo">Портфолио</div>
                    <div className="about_nav">
                        <Link to="/" className="about_nav_link">Главная</Link>
                        <Link to="/about" className="about_nav_link">Обо мне</Link>
                        <Link to="/projects" className="about_nav_link">Проекты</Link>
                        <Link to="/contacts" className="about_nav_link">Контакты</Link>
                    </div>
                    <div className="about_nav_burger">
                        <HeaderBurger />
                    </div>
                </div>

                <div className="about_main">

                    <div className="about_task">
                        <div className="about_header_task">

                            <div className={about ? "header_nav_task_active" : "header_nav_task"}
                                onClick={() => {
                                    setAbout(true);
                                    setSkills(false);
                                    setEducation(false);
                                }}
                            >
                                Обо мне
                            </div>

                            <div className={skills ? "header_nav_task_active" : "header_nav_task"}
                                onClick={() => {
                                    setAbout(false);
                                    setSkills(true);
                                    setEducation(false);
                                }}
                            >
                                Навыки
                            </div>

                            <div className={education ? "header_nav_task_active" : "header_nav_task"}
                                onClick={() => {
                                    setAbout(false);
                                    setSkills(false);
                                    setEducation(true);
                                }}
                            >
                                Образование
                            </div>

                        </div>

                        <div className="about_main_task">
                            <div className={about ? "main_task_about_active" : "main_task_about"}>
                                <div className="about_subtitle">
                                    Я - начинающий и амбициозный фронтенд разработчик. Мои знания и опыт позволяют мне успешно решать сложные задачи и создавать качественные продукты.<br/>
                                    Я использую современные технологии HTML, CSS3, JavaScript и React.<br/><br/>
                                    Моя цель - развиваться и улучшать свои навыки, чтобы стать профессионалом в своей области и создавать продукты, которые будут полезны для пользователей.<br/>
                                    Я готов работать в команде и брать на себя ответственность за свои проекты. Если вы ищете талантливого сотрудника, который готов к новым вызовам и развитию, то я рад присоединиться к вашей команде.
                                </div>
                            </div>

                            <div className={skills ? "main_task_skills_active" : "main_task_skills"}>
                                <div className="skills_title">Основные навыки:</div>
                                <div className="about_skills_container">
                                    <div className="skills_span_container"><img src={htmlIcon}/> <span>HTML5</span></div>
                                    <div className="skills_span_container"><img src={cssIcon}/> <span>CSS3</span></div>
                                    <div className="skills_span_container"><img src={jsIcon}/> <span>JavaScript</span></div>
                                    <div className="skills_span_container"><img src={reactIcon}/> <span>React.js</span></div>
                                    <div className="skills_span_container"><img src={sassIcon}/> <span>Sass. Scss</span></div>
                                    <div className="skills_span_container"><img src={gitIcon}/> <span>Git. GitHub</span></div>
                                </div>
                                <div className="skills_title">Дополнительно:</div>
                                <div className="skills_subtitle">
                                    - Опыт работы с Axios, Redux, REST API;<br/>
                                    - Опыт работы с библиотеками React (react-router-dom, react-hook-form, react-framer-motion и др)<br/>
                                    - Стремление к самообразованию и развитию профессиональных навыков;<br/>
                                </div>
                            </div>

                            <div className={education ? "main_task_education_active" : "main_task_education"}>
                                <div className="education_container">
                                    <div className="skills_title">SkillFactory</div>
                                    <div className="skillseducation_subtitle">
                                        <span>Специализация:</span> Frontend разработчик<br/>
                                        <span>Период обучения:</span> 26.09.2022 - 14.06.2023<br/>
                                        <span>Изучил:</span> HTML5, CSS3, JavaScript, Git, GitHub, npm, Gulp, Sass, Scss, React.js<br/>
                                        <span>Сертификат:</span> <Link target="blank" to="https://disk.yandex.ru/i/1VTKxMfmIF6sJA"> Открыть</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="about_main_image">
                        <img src={aboutImage} alt="img" />
                    </div>

                </div>

            </div>

        </section>
    )
}

export default About;