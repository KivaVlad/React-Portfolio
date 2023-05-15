import { HeaderBurger } from "../../components/HeaderBurger/HeaderBurger";
import { Link } from "react-router-dom";
import css from "./about.css";

import image1 from "../../assets/images/photo_1.jpg";
import image2 from "../../assets/images/photo_2.jpg";
import image3 from "../../assets/images/photo_3.jpg";
import image4 from "../../assets/images/photo_4.jpg";
import image5 from "../../assets/images/photo_5.jpg";
import image6 from "../../assets/images/photo_6.jpg";
import image7 from "../../assets/images/photo_7.jpg";
import image8 from "../../assets/images/photo_8.jpg";
import image9 from "../../assets/images/photo_9.jpg";
import image10 from "../../assets/images/photo_10.jpg";
import image11 from "../../assets/images/photo_11.jpg";
import image12 from "../../assets/images/photo_12.jpg";
import image13 from "../../assets/images/photo_13.jpg";
import image14 from "../../assets/images/photo_14.jpg";
import image15 from "../../assets/images/photo_15.jpg";

import htmlIcon from "../../assets/images/icons/html-icon.png";
import cssIcon from "../../assets/images/icons/css-icon.png";
import jsIcon from "../../assets/images/icons/js-icon.png";
import reactIcon from "../../assets/images/icons/react-icon.png";
import sassIcon from "../../assets/images/icons/sass-icon.png";
import gitIcon from "../../assets/images/icons/git-icon.png";
import figmaIcon from "../../assets/images/icons/figma-icon.png";

const About = () => {

    return(
        <section className="about">
            <div className="about_left_section">
                <div className="about_left_section_container">
                    <div className="about_left_section_header">
                    <div className="home_left_section_header_logo">Портфолио</div>
                    <div className="about_left_section_header_nav">
                        <Link to="/" className="about_left_section_header_nav_item">Главная</Link>
                        <Link to="" className="about_left_section_header_nav_item">Проекты</Link>
                        <Link to="" className="about_left_section_header_nav_item">Контакты</Link>
                    </div>
                    <div className="about_left_section_header_burger">
                        <HeaderBurger />
                    </div>
                    </div>
                    <div className="about_left_section_main">
                        <div className="about_left_section_title">Чем я могу быть для вас полезен:</div>
                    
                        <div className="about_left_section_subtitle">
                            <span className="about_left_section_subtitle_item">1. Разработаю лендинг как по готовому макету, так и сайт с индивидуальным дизайном с нуля и под ключ;</span>
                            <span className="about_left_section_subtitle_item">2. Смогу создать, поправить, помочь разобраться;</span>
                            <span className="about_left_section_subtitle_item">3. Готов внести правки в техническую часть сайтов;</span>
                            <span className="about_left_section_subtitle_item">4. Наполню сайт или магазин контентом: тексты, изображения в том числе с обработкой;</span>
                        </div>

                        <div className="about_left_section_skills">
                            <div className="about_left_section_skills_title">Знания, навыки:</div>
                            <div className="about_left_section_skills_items">
                                <div className="about_left_section_skills_item"><img src={htmlIcon}/><span>HTML5</span></div>
                                <div className="about_left_section_skills_item"><img src={cssIcon}/><span>CSS3</span></div>
                                <div className="about_left_section_skills_item"><img src={jsIcon}/><span>JavaScript</span></div>
                                <div className="about_left_section_skills_item"><img src={reactIcon}/><span>React.JS</span></div>
                                <div className="about_left_section_skills_item"><img src={sassIcon}/><span>Gulp. Sass. Scss</span></div>
                                <div className="about_left_section_skills_item"><img src={gitIcon}/><span>Git. GitHub</span></div>
                                <div className="about_left_section_skills_item"><img src={figmaIcon}/><span>Figma</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="about_left_section_footer">
                        <div className="about_left_section_footer_text">
                            <div className="about_left_section_footer_title">Примеры всех моих работ вы можете посмотреть в разделе «Проекты»</div>
                            <p className="about_left_section_footer_subtitle">Если вы не нашли там интересующего примера, я всегда готов ответить на ваши вопросы и предоставить дополнительную информацию о своих навыках и умениях, подтвержденных реальными проектами.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about_right_section">
                <div className="about_right_section_container">
                    <div className="about_right_section_column">
                        <img src={image1} className="about_right_section_image"/>
                        <img src={image2} className="about_right_section_image"/>
                        <img src={image3} className="about_right_section_image"/>
                        <img src={image4} className="about_right_section_image"/>
                        <img src={image5} className="about_right_section_image"/>
                    </div>

                    <div className="about_right_section_column">
                        <img src={image6} className="about_right_section_image"/>
                        <img src={image7} className="about_right_section_image"/>
                        <img src={image8} className="about_right_section_image"/>
                        <img src={image9} className="about_right_section_image"/>
                        <img src={image10} className="about_right_section_image"/>
                        <img src={image2} className="about_right_section_image"/>
                    </div>

                    <div className="about_right_section_column">
                        <img src={image11} className="about_right_section_image"/>
                        <img src={image12} className="about_right_section_image"/>
                        <img src={image13} className="about_right_section_image"/>
                        <img src={image14} className="about_right_section_image"/>
                        <img src={image15} className="about_right_section_image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;