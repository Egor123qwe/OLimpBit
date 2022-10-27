import React from 'react'
import s from './Content.module.css'
import { useFormik } from 'formik';
import { lengthControl, StageControl } from '../../../../Utils/TextAreaUtils';
import University from '../../../../BLL/Uniniversity.json'
import axios from "axios";

const validate = values => {
    const errors = {};

    let GenerallengthControl = lengthControl(70)

    if (GenerallengthControl(values.FirsName)) { errors.FirsName = GenerallengthControl(values.FirsName) }
    if (GenerallengthControl(values.Name)) { errors.Name = GenerallengthControl(values.Name) }
    if (GenerallengthControl(values.FatherName)) { errors.FatherName = GenerallengthControl(values.FatherName) }
    if (GenerallengthControl(values.Email)) { errors.Email = GenerallengthControl(values.Email) }
    if (GenerallengthControl(values.University)) { errors.University = GenerallengthControl(values.University) }
    if (GenerallengthControl(values.Stage)) { errors.Stage = GenerallengthControl(values.Stage) }
    if (StageControl(values.Stage)) { errors.Stage = StageControl(values.Stage) }
    if (GenerallengthControl(values.Telephone)) { errors.Telephone = GenerallengthControl(values.Telephone) }

  
    return errors;
};


function Content() {

    let UniversityEl = University.map((el) => <option value={el.name} label={el.name}>{el.name}</option>)

    const formik = useFormik({
        initialValues: {
            FirsName: '',
            Name: '',
            FatherName: '',
            Email: '',
            University: '',
            Stage: '',
            Telephone: '',
            isDataScience: false,
            isTesting: false,
            isMobileDew: false,
            isPHP: false,
            isDotNet: false,
            isJava: false,
            isWebDew: false,
        },
        validate,
        onSubmit: (values) => {
            axios.post("https://bit-cup.bsuir.by/", values, {
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                
            } })
             .then(function (response) {
               console.log(response);
             })
             .catch(function (error) {
               console.log(error);
             });
        }
    });

    return (
        
            <form className={s.Content} onSubmit={formik.handleSubmit}>
                <div className={s.Mainblock}>
                    <div className={s.lable}>Регистрация</div>
                    <div className={s.InputBox}>
                        <div className={s.Line}><div className={s.InputName}>Фамилия</div>
                            <input className={s.input} id='FirsName' type="FirsName" onChange={formik.handleChange} value={formik.values.FirsName}></input>
                            {formik.errors.FirsName && formik.touched.FirsName ? <div className={s.errorMessage}>{formik.errors.FirsName}</div> : null}
                        </div>
                        <div className={s.Line}><div className={s.InputName}>Имя</div>
                            <input className={s.input} id='Name' type="Name" onChange={formik.handleChange} value={formik.values.Name}></input>
                            {formik.errors.Name && formik.touched.Name  ? <div className={s.errorMessage}>{formik.errors.Name}</div> : null}
                        </div>
                        <div className={s.Line}><div className={s.InputName}>Отчество</div>
                            <input className={s.input} id='FatherName' type="FatherName" onChange={formik.handleChange} value={formik.values.FatherName}></input>
                            {formik.errors.FatherName && formik.touched.FatherName  ? <div className={s.errorMessage}>{formik.errors.FatherName}</div> : null}
                        </div>
                        <div className={s.Line}><div className={s.InputName}>E-mail</div>
                            <input className={s.input} id='Email' type="Email" onChange={formik.handleChange} value={formik.values.Email}></input>
                            {formik.errors.Email && formik.touched.Email  ? <div className={s.errorMessage}>{formik.errors.Email}</div> : null}
                        </div>
                        <div className={s.Line}><div className={s.InputName}>Моб. телефон</div>
                            <input className={s.input} id='Telephone' type="Telephone" onChange={formik.handleChange} value={formik.values.Telephone}></input>
                            {formik.errors.Telephone && formik.touched.Telephone  ? <div className={s.errorMessage}>{formik.errors.Telephone}</div> : null}
                        </div>
                        <div className={s.Line}>
                        <span className={s.InputName}>Уч. заведение</span>
                            <select  className={s.input} id='University' type="University"
                                value={formik.values.University}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} >
                                <option value="" label="Выберете уч. заведение">
                                    Выберете учебное заведение{""}
                                </option>
                                { UniversityEl }
                            </select>
                            {(formik.errors.University && formik.touched.University)  ? <div className={s.errorMessage}>{formik.errors.University}</div> : null}
                        </div>
                        <div className={s.Line2}>
                            <div className={s.InputName1}>Курс</div><input className={s.input3} id='Stage' type="Stage" onChange={formik.handleChange} value={formik.values.Stage}></input>
                            {formik.errors.Stage && formik.touched.Stage  ? <div className={s.errorMessage}>{formik.errors.Stage}</div> : null}
                        </div>
                    </div>

                    <div className={s.BoolBox}>
                        <div className={s.BoolBox2}>
                            <div className={s.lable}>Конкурсы</div>
                            <div className={s.ContentBox}>
                                <div className={s.leftSide}>
                                    <lable>
                                        <div className={s.Line}>
                                            <div className={s.Cheak}></div>
                                            <input className={s.checkbox} id='isDataScience' type="checkbox" defaultChecked={formik.values.isDataScience} onChange={formik.handleChange} value={formik.values.isDataScience}/><span className={s.checkboxName}>Data Science</span>
                                        </div>
                                    </lable>
                                    <lable>
                                        <div className={s.Line}>
                                            <input className={s.checkbox} id='isTesting' type="checkbox" defaultChecked={formik.values.isTesting} onChange={formik.handleChange} value={formik.values.isTesting}/><span className={s.checkboxName}>Software automation testing</span>
                                        </div>
                                    </lable>
                                    <lable>
                                        <div className={s.Line}>
                                            <input className={s.checkbox} id='isMobileDew' type="checkbox" defaultChecked={formik.values.isMobileDew} onChange={formik.handleChange} value={formik.values.isMobileDew}/><span className={s.checkboxName}>Mobile development</span>
                                        </div>
                                    </lable>
                                    <lable>
                                        <div className={s.Line}>
                                            <input className={s.checkbox} id='isPHP' type="checkbox" defaultChecked={formik.values.isPHP} onChange={formik.handleChange} value={formik.values.isPHP}/><span className={s.checkboxName}>Веб-приложения на PHP</span>
                                        </div>
                                    </lable>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.Line}>
                        <button type="submit" className={s.button}>Подать заявку</button>
                    </div>
                </div>
            </form>
    );
}


export default Content;