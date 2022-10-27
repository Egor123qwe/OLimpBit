import React from 'react'
import s from './Footer.module.css'
import { useNavigate } from 'react-router-dom';

const Footer1 = (props) => {
    let link = ''
    if(props.hist === 'Sponsors/Ciir') link = 'https://www.bsuir.by/ru/tsiir'
    if(props.hist === 'Sponsors/Yandex') link = 'https://yandex.ru/company/'
    if(props.hist === 'Sponsors/Softteco') link = 'https://softteco.team/'
    if(props.hist === 'Sponsors/LeverX') link = 'https://leverx.com/ru/'


    return (
        <div className={s.Footer}>
            <a className={s.Button1} href={link}><span className={s.lable}>Сайт компании</span></a>
        </div>
    );
}


export default Footer1;