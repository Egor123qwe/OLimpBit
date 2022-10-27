import React from 'react'
import s from './Stages.module.css'

const Stages = () => {
    return (
        <div className={s.Stages}>
            <h1>Этапы</h1>
            <div className={s.GeneralText}>Олимпиада BIT-Cup – это соревнования, 
            направленные на выявление и поддержку талантливых студентов, 
            которые обучаются наиболее востребованным на рынке информационным технологиям.<br/><br/>
            В олимпиаде принимают участие сильнейшие студенты со всей Республики Беларусь.<br/><br/>
            Организаторами олимпиады являются Министерство образования Республики Беларусь 
            и Белорусский государственный университет информатики и радиоэлектроники.<br/><br/>
            Олимпиада состоит из конкурсов на знание современных информационных технологий. 
            Конкурсные задания разрабатываются партнёрами олимпиады – ведущими IT-компаниями.<br/><br/>
            Отличительной чертой соревнований является их практическая ориентированность, 
            что позволяет и самим студентам, и их преподавателям оценить уровень не только 
            теоретических знаний, но и практической подготовки.
            </div>
        </div>
    );
}


export default Stages;