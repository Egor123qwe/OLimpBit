import React from 'react'
import s from './Direction.module.css';

const Direction = () => {
    return (
        <div className={s.Direction}>
            <h1>Направления</h1>
            <div className={s.GeneralText}>
                Задания для олимпиады готовятся спонсорами соревнований - ведущими it-компаниями
                <ul>
                    <li>Направление 1</li>
                    <li>Направление 2</li>
                    <li>И т д</li>
                </ul>
            </div>
        </div>
    );
}


export default Direction;
