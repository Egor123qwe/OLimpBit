import React from 'react'
import s from './Content.module.css'

function Content(props) {

    return (
        <div className={s.Content}>
            {props.ContentComponent}
        </div>
    );
}


export default Content;