import React from 'react'
import s from './Go.module.css';

const Java = () => {
    return (
        <div className={s.GoLang}>
            <h1>Java разработка</h1>
            <div className={s.GeneralText}>
                <p>Задание включает в себя создание поисковой системы в телефонном справочнике.</p>
                <p>Участникам предстоит разработать схему базы данных, алгоритм гибкого поиска сотрудников предприятия в телефонном справочнике, панель управления для администратора.</p>
                <p>Используемый стек технологий: Java, SpringBoot, JSP, PostgreSQL.</p>
            </div>
        </div>
    );
}


export default Java;