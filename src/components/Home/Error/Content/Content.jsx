import React from 'react'
import s from './Content.module.css'

function Content(props) {

    let copy = [...props.SelectedItem];
    copy[props.Id] = 0;

    return (
        <div className={s.Content}>
            <div className={s.Text}>{props.Text}</div>
            <button onClick = { () => props.SetSelectedItem(copy) } className={s.button}>OK</button>
        </div>
    );
}


export default Content;