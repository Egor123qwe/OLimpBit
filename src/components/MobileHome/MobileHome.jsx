import React from 'react'
import { NavLink } from 'react-router-dom';
import s from "./MobileHome.module.css"
import ImageLogo from '../../Images/WindowsLogo.png'
import Yandex from '../../Images/Yandex.png'
import Quest from '../../Images/Quest.png'
import { useNavigate } from 'react-router-dom';

const MobileHome = (props) => {

    const navigate = useNavigate();

    return (
        <div className={s.MobileHome}>
            <div className={s.header}>
                <div className={s.AboutOlimpiad}>
                    <img src={ Quest }/>
                    <span className={s.AboutOlimpiadLable}>Об олимпиаде</span>
                </div>
                <div className={s.Logo}>
                    <div className={s.LogoPart}>
                        <img src={ ImageLogo }/>
                        <div>Типа лого биткапа</div>
                    </div>
                </div>
            </div>
            <div className={s.Content}>
                <div className={s.Diaractions}>
                    <span className={s.DiaractionsLable}>Направления</span>
                </div>
                <div className={s.Ways}>
                    <div className={s.Way1}><span className={s.WayLable}>Automation testing</span></div>
                    <div className={s.Way2}><span className={s.WayLable}>Automation testing</span></div>
                    <div className={s.Way3}><span className={s.WayLable}>Automation testing</span></div>
                    <div className={s.Way4}><span className={s.WayLable}>Automation testing</span></div>
                </div>
            </div>
            <div className={s.SponsorLable}><span className={s.SponsorL}>Спонсоры</span></div>
            <div className={s.SponsorsKit}>
                <div className={s.Sponsor1}>
                    <img src={ Yandex }/>
                </div>
                <div className={s.Sponsor2}>
                    <img src={ Yandex }/>    
                </div>
                <div className={s.Sponsor3}>
                    <img src={ Yandex }/>
                </div>
                <div className={s.Sponsor4}>
                    <img src={ Yandex }/>
                </div>
            </div>
            <button className={s.Registration} onClick={ () => navigate('Registration') }>Зарегистрироваться</button>
            <div className={s.Footer}>
                <div className={s.KsisLogo}></div>
                <div className={s.BSUIRLogo}></div>
                <span className={s.Years}>2014-2022</span>
            </div>
        </div>
    );
}


export default MobileHome;
