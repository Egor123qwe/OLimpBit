import React from 'react'
import s from './LeverX.module.css';

const LeverX = () => {
    return (
        <div className={s.LeverX}>
            <h1>LeverX Group</h1>
            <div className={s.GeneralText}>
                <p><b>LeverX Group</b> — это международная IT-компания, объединяющая 2 бренда: <b>LeverX</b> и <b>Emerline</b>.</p>
                <ul>
                    <li><b>LeverX</b> — официальный партнер немецкой компании SAP и ведущий поставщик SAP-решений под ключ;</li>
                    <li><b>Emerline</b> — технологический партнер стартапов и крупных корпораций;</li>
                    <li>18+ лет на рынке;</li>
                    <li>1300+ сотрудников;</li>
                    <li>550+ успешных проектов;</li>
                    <li>офисы в Минске, Гомеле, Вроцлаве, Вильнюсе, Киеве, Хайдельберге, Москве и Ташкенте;</li>
                    <li>работа со стартапами и компаниями из списка Fortune 1000;</li>
                    <li>разработка собственных продуктов для B2B- и B2C-сегментов;</li>
                    <li>клиенты по всему миру.</li>
                </ul>
                <p>LeverX Group стремится быть максимально независимой от конкретной технологии или индустрии, чтобы дать своим сотрудникам возможность реализовать себя в желаемых направлениях.</p>
                <p><b>С какими технологиями и сервисами мы работаем?</b></p>
                <p><b>LeverX</b></p>
                <ul>
                    <li>SAP ABAP</li>
                    <li>SAP S/4HANA (CDS / OData / RAP)</li>
                    <li>Business Technology Platform</li>
                    <li>SAP Fiori / SAPUI5</li>
                    <li>SAP Native HANA</li>
                    <li>Integration (SCI, REST, SOA и другие)</li>
                </ul>
                <p><b>Emerline</b></p>
                <ul>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Node.js</li>
                    <li>.NET</li>
                    <li>Golang</li>
                    <li>JavaScript (React, Angular, Vue) и другие</li>
                    <li>AWS, Azure</li>
                </ul>
                <p>Мы уделяем особое внимание Data Science, Machine Learning, IoT, Augmented Reality, Artificial Intelligence и инвестируем в R&D-отдел Emerline для развития теоретических и практических навыков по множеству инновационных направлений.</p>
            </div>
        </div>
    );
}


export default LeverX;