import React from 'react'
import s from './StartSection.module.css'

const StartSection = () => {
    return (
        <div className={s.StartSection}>
            <div className={s.GeneralText}>
                Добро пожаловать!
                <div className={s.Logo}>
<div className={s.item1}> ____ _____ _______      _____              ___   ___ ___  ___  </div>
<div className={s.item1}>|  _ \_   _|__   __|    / ____|            |__ \ / _ \__ \|__ \ </div>
<div className={s.item1}>| |_) || |    | |______| |    _   _ _ __      ) | | | | ) |  ) |</div>
<div className={s.item1}>|  _  | |     | |______| |   | | | | '_ \    / /| | | |/ /  / / </div>
<div className={s.item1}>| |_) || |_   | |      | |___| |_| | |_) |  / /_| |_| / /_ / /_ </div>
<div className={s.item1}>|____/_____|  |_|       \_____\__,_| .__/  |____|\___/____|____|</div>
<div className={s.item2}>                                   | |</div>                          
<div className={s.item2}>                                   |_|</div>    
<div className={s.item1}></div>                           
                </div>                     

                Студенческая олимпиада в сфере информацинных технологий на базе 
                Факультета компьютерных систем и сетей Белорусского государственного 
                университета информатики и радиоэлектроники
            </div>
        </div>
    );
}


export default StartSection;
