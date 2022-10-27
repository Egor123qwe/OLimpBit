import React, { useState } from 'react'
import s from './Content.module.css'
import WinnersBlock from './WinnersBlock/WinnersBlock';
import Data1 from '../../../../BLL/Winners.json'

function Content(props) {

    let Data = [
        [
            [
                ['Скала Джонсон Автомобиль', 'БГУИР'], 
                ['Жак Фреско СПИПов', 'БГУИР'],
                ['Какой-то ИиТПшник КСИС', 'БГУИР']
            ],
        ],

        [
            [
                ['Genii Progi OH', 'БГУ'], 
                ['SMTH IN THE', 'БГУ'],
                ['Сколько ещё верстать?', 'БГУ']
            ],
        ],

        [
            [
                ['Лень придумывать Имя', 'Не БНТУ'], 
                ['Трухан Егор Валерьевич', 'Не БНТУ'],
                ['Это я сверху', 'Не БНТУ']
            ],
        ],

        [
            [
                ['Какойто умный кент', 'Хогварц'], 
                ['Этот тоже не глупый', 'Хогварц'],
                ['НУ вот и всё', 'Хогварц']
            ],
        ],

    ];

    let [SelectedItem, SetSelectedItem] = useState(0);

    let i = -1
    let YearsEl = Data1.map((el) => {
        i++;
        let TempPage = i;
        return (<div onClick={ () => {SetSelectedItem(TempPage)} } 
                className={SelectedItem === TempPage ? s.itemCoosing : s.item}>
                <span className={s.YearName}>{el.year}</span>
            </div>)
    })

    
    let BlocksEl = Data1.map((el) => {

        let WinnersBlockEl = el.competitions.map((el) => {
            return <WinnersBlock TableHead={el.table_heads} Data={el.winners} name={el.name}/>
        })

    return (            
        <div className={props.colaps ? s.WinsBloks1 : s.WinsBloks}>
        <div className={s.Block1}>
            {WinnersBlockEl.length >= 1 ? WinnersBlockEl[0] : <></>}
            {WinnersBlockEl.length >= 2 ? WinnersBlockEl[1] : <></>}
            {WinnersBlockEl.length >= 5 ? WinnersBlockEl[2] : <></>}
        </div>
        <div className={s.Block2}>
            {WinnersBlockEl.length <= 4 && WinnersBlockEl.length >= 3 ? WinnersBlockEl[2]  : <></>}
            {WinnersBlockEl.length >= 4 ? WinnersBlockEl[3] : <></>}
            {WinnersBlockEl.length >= 5 ? WinnersBlockEl[4] : <></>}
            {WinnersBlockEl.length >= 6 ? WinnersBlockEl[5] : <></>}
        </div>
        </div>)
    })

    return (
        <div className={s.Content}>
            <div className={s.paginator}>
                {YearsEl}
            </div>
                {BlocksEl[SelectedItem]}
        </div>
    );
}


export default Content;