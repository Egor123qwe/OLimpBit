import React from 'react'
import s from './WinnersBlock.module.css'

function WinnersBlock(props) {

    return (
        <div className={s.WinnersBlock}>
            <div className={s.Lable}>{props.name}</div>
            <div class="table-wrap">
		        <table>
                <thead>
                    <tr>
                        <th className={s.col1}>{props.TableHead[0]}</th>
                        <th className={s.col1}>{props.TableHead[1]}</th>
                        <th className={s.col1}>{props.TableHead[2]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={s.colum1} data-label="Услуга">{props.Data[0][0]}</td>
                        <td className={s.colum1} data-label="Описание">{props.Data[0][1]}</td>
                        <td className={s.colum1} data-label="Цена">{props.Data[0][2]}</td>
                    </tr>
                    <tr>
                        <td className={s.colum1} data-label="Услуга">{props.Data[1][0]}</td>
                        <td className={s.colum1} data-label="Описание">{props.Data[1][1]}</td>
                        <td className={s.colum1} data-label="Цена">{props.Data[1][2]}</td>
                    </tr>
                    <tr>
                        <td className={s.colum1} data-label="Услуга">{props.Data[2][0]}</td>
                        <td className={s.colum1} data-label="Описание">{props.Data[2][1]}</td>
                        <td className={s.colum1} data-label="Цена">{props.Data[2][2]}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}


export default WinnersBlock;