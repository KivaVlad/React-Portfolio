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
import figmaIcon from "../../assets/images/icons/figma-icon.png";
import cvIcom from "../../assets/images/icons/cv.png";


const About = () => {

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

                    <div className="about_main_text_container">
                        <h1 className="about_title">Обо мне</h1>
                        <div className="about_subtitle">
                            Я - начинающий и амбициозный фронтенд разработчик. Мои знания и опыт позволяют мне успешно решать сложные задачи и создавать качественные продукты.<br/>
                            Я использую современные технологии HTML, CSS3, JavaScript и React.<br/><br/>
                            Моя цель - развиваться и улучшать свои навыки, чтобы стать профессионалом в своей области и создавать продукты, которые будут полезны для пользователей.<br/>
                            Я готов работать в команде и брать на себя ответственность за свои проекты. Если вы ищете талантливого сотрудника, который готов к новым вызовам и развитию, то я рад присоединиться к вашей команде.
                        </div>

                        <div className="about_main_skills">
                            <h1 className="about_title">Знания, навыки</h1>
                            <div className="about_skills_container">
                                <div className="skills_span_container"><img src={htmlIcon}/> <span>HTML5</span></div>
                                <div className="skills_span_container"><img src={cssIcon}/> <span>CSS3</span></div>
                                <div className="skills_span_container"><img src={jsIcon}/> <span>JavaScript</span></div>
                                <div className="skills_span_container"><img src={reactIcon}/> <span>React.js</span></div>
                                <div className="skills_span_container"><img src={sassIcon}/> <span>Sass. Scss</span></div>
                                <div className="skills_span_container"><img src={gitIcon}/> <span>Git. GitHub. GitLab</span></div>
                                <div className="skills_span_container"><img src={figmaIcon}/> <span>Figma</span></div>
                            </div>
                        </div>

                    </div>

                    <div className="about_main_image">
                        <img src={aboutImage} alt="img" />
                    </div>

                </div>

            </div>

            <div className="about_down_section">
                <h2 className="about_down_section_title">
                    Примеры всех моих работ вы можете посмотреть в разделе «Проекты». 
                    Если вы не нашли там интересующего примера, я всегда готов ответить на ваши вопросы и предоставить дополнительную информацию о своих навыках и умениях, подтвержденных реальными проектами.
                </h2>
            </div>

            <div className="about_footer">
                <h3 className="about_footer_text">Сертификат, подтверждающий квалификацию</h3>
                <Link target="_blank" to="https://disk.yandex.ru/i/1VTKxMfmIF6sJA"><img src={cvIcom} alt="cv" className="about_footer_icon"/></Link>
            </div>
        </section>
    )
}

export default About;