import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBurger } from '../../components/HeaderBurger/HeaderBurger';

import "./contacts.scss";

import devImg from "../../assets/images/contacts-vector.png";
import githubIcon from "../../assets/images/icons/github.png";
import tgIcon from "../../assets/images/icons/tg.png";
import waIcon from "../../assets/images/icons/whatsapp.png";
import mailIcon from "../../assets/images/icons/mail.png";
import cvIcon from "../../assets/images/icons/cv.png";

const Contacts = () => {
  return (
    <section className='contacts_section'>
        <div className="container">

            <div className="contacts_header">
                <div className="home_left_section_header_logo">Портфолио</div>
                <div className="contacts_nav">
                    <Link to="/" className="contacts_nav_link">Главная</Link>
                    <Link to="/about" className="contacts_nav_link">Обо мне</Link>
                    <Link to="/projects" className="contacts_nav_link">Проекты</Link>
                    <Link to="/contacts" className="contacts_nav_link">Контакты</Link>
                </div>
                <div className="contacts_nav_burger">
                    <HeaderBurger />
                </div>
            </div>

            <div className='contacts_main'>
                <h1 className='contacts_main_title'>Мои контакты</h1>
                <div className="contacts_wrapper">
                    <div className="contacts_main_content">
                        <div className="contacts_cards">
                            <Link target='_blank' to="https://t.me/kivavlad" className='contacts_links'>
                                <div className="contacts_card contacts_card_tg">
                                    <img src={tgIcon} alt='tg' />
                                    <h3 className='contacts_card_title'>Telegram</h3>
                                </div>
                            </Link>
                            <Link target='_blank' to="https://wa.me/79936001995" className='contacts_links'>
                                <div className="contacts_card contacts_card_wa">
                                    <img src={waIcon} alt='wa' />
                                    <h3 className='contacts_card_title'>WhatsApp</h3>
                                </div>
                            </Link>
                            <Link target='_blank' to="mailto:kivavladdev@yandex.ru" className='contacts_links'>
                                <div className="contacts_card contacts_card_mail">
                                    <img src={mailIcon} alt='email' />
                                    <h3 className='contacts_card_title'>Email</h3>
                                </div>
                            </Link>
                            <Link target='_blank' to="https://github.com/KivaVlad" className='contacts_links'>
                                <div className="contacts_card contacts_card_github">
                                    <img src={githubIcon} alt='email' />
                                    <h3 className='contacts_card_title'>GitHub</h3>
                                </div>
                            </Link>
                        </div>
                        <Link target='_blank' to="https://disk.yandex.ru/i/RS96uJeubS_ZEw" className='contacts_links'>
                            <div className='contacts_cv'>
                                <img src={cvIcon} alt='cv' />
                                <h3 className="contacts_cv_title">Резюме</h3>
                            </div>
                        </Link>
                    </div>

                    <div className="contacts_main_image">
                        <img src={devImg} alt='dev' className='contacts_main_img' />
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Contacts