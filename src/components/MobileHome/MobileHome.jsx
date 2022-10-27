import React from 'react'
import s from "./MobileHome.module.css"
import ImageLogo from '../../Images/BitCupLogo.png'
import Yandex from '../../Images/Yandex.png'
import LeverX from '../../Images/LeverX1.png'
import SoftTeco from '../../Images/softTeco.png'
import Bsu from '../../Images/bsuir1.png'
import Quest from '../../Images/Quest.png'
import Kubok from '../../Images/Kubok.png'
import Minesweeper from '../../Images/Navbar1/Minesweeper.svg'
import Timetable from '../../Images/End/Timetable.png'
import { useNavigate } from 'react-router-dom';

const MobileHome = (props) => {

    const navigate = useNavigate();

    return (
        <div className={s.MobileHome}>
            <div className={s.header}>
                <div className={s.AboutOlimpiad}>
                    <div className={s.InfoAbout} onClick={ () => navigate('AboutOlimpiad/AboutOlimpiad') }>
                        <img src={ Quest }/>
                        <span className={s.AboutOlimpiadLable}>Об олимпиаде</span>
                    </div>
                    <div className={s.Stag} onClick={ () => navigate('AboutOlimpiad/Stages') }>
                        <img src={ Timetable }/>
                        <span className={s.AboutOlimpiadLable}>Этапы</span>
                    </div>
                    <div className={s.Wins} onClick={ () => navigate('Winners') }>
                        <img src={ Kubok }/>
                        <span className={s.AboutOlimpiadLable}>Зал славы</span>
                    </div>
                    <div className={s.Saper} onClick={ () => navigate('Minesweeper') }>
                        <img src={ Minesweeper }/>
                        <span className={s.AboutOlimpiadLable}>Сапёр</span>
                    </div>
                </div>
                <div className={s.Logo}>
                        <img src={ ImageLogo }/>
                </div>
            </div>
            <div className={s.Content}>
                <div className={s.Diaractions}>
                    <div onClick={ () => navigate('AboutOlimpiad/Direction') } className={s.Diaractions2}>
                        <span className={s.DiaractionsLable}>Направления</span>
                    </div>
                    <div className={s.Ways1}>
                        <div onClick={ () => navigate('AboutOlimpiad/Direction/SoftweatDev')} className={s.Way5}><span className={s.WayLable}>Проектирование архитектуры программного продукта</span></div>
                        <div onClick={ () => navigate('AboutOlimpiad/Direction/DesignAlg')} className={s.Way6}><span className={s.WayLable}>Дизайн, оптимизация и верификация алгоритмов</span></div>
                    </div>
                </div>
                <div className={s.Ways}>
                    <div onClick={ () => navigate('AboutOlimpiad/Direction/Java')} className={s.Way1}><span className={s.WayLable}>Java разработка</span></div>
                    <div onClick={ () => navigate('AboutOlimpiad/Direction/Web')} className={s.Way2}><span className={s.WayLable}>Web Development</span></div>
                    <div onClick={ () => navigate('AboutOlimpiad/Direction/Dotnet')} className={s.Way3}><span className={s.WayLable}>Программирование на .NET</span></div>
                    <div onClick={ () => navigate('AboutOlimpiad/Direction/SoftAuto')} className={s.Way4}><span className={s.WayLable}>Software Automation Testing</span></div>
                </div>
            </div>
            <div onClick={ () => navigate('AboutOlimpiad/Sponsors') } className={s.SponsorLable}><span className={s.SponsorL}>Спонсоры олимпиады</span></div>
            <div className={s.SponsorsKit}>
                <div className={s.Sponsor1} onClick={ () => navigate('AboutOlimpiad/Sponsors/Yandex') }>
                    <img src={ Yandex }/>
                </div>
                <div className={s.Sponsor2} onClick={ () => navigate('AboutOlimpiad/Sponsors/Softteco') }>
                    <img src={ SoftTeco }/>    
                </div>
                <div className={s.Sponsor3} onClick={ () => navigate('AboutOlimpiad/Sponsors/LeverX') }>
                    <img src={ LeverX }/>
                </div>
                <div className={s.Sponsor4 } onClick={ () => navigate('AboutOlimpiad/Sponsors/Ciir') }>
                    <img src={ Bsu }/>
                </div>
            </div>
            <div className={s.Footer2}>
                <div onClick={ () => navigate('Registration') } className={s.Registration}><span className={s.RegistrationL}>Зарегистрироваться</span></div>
            </div>
            <div className={s.Footer}>
                <a href='mailto:support@bit-cup.by' className={s.Debag}></a>
                <a href='https://vk.com/bitcupby' className={s.Vk}></a>
                <a href='https://www.bsuir.by/ru/fksis' className={s.KsisLogo}></a>
                <a href='https://www.bsuir.by/' className={s.BSUIRLogo}></a>
            </div>
        </div>
    );
}


export default MobileHome;
