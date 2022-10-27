import React from 'react'
import s from './Direction.module.css';

const Direction = () => {
    return (
        <div className={s.Direction}>
            <h1>Направления</h1>
            <div className={s.GeneralText}>
                <p>Задания для олимпиады готовятся спонсорами соревнований - ведущими IT-компаниями</p>
                <ul>
                    <li>Software Automation Testing</li>
                    <li>Программирование на .NET</li>
                    <li>Дизайн, оптимизация и верификация алгоритмов</li>
                    <li>Web Development</li>
                    <li>Проектирование архитектуры программного продукта</li>
                    <li>Java разработка</li>
                </ul>
            </div>
        </div>
    );
}


export default Direction;
