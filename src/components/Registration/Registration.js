import React from 'react';
import styles from './Registration.module.scss'
import addFileAction from "../../store/actions/addFileAction";
import logo from "../../img/add_image.png";
import changeLoginAction from "../../store/actions/changeLoginAction";
import changePasswordAction from "../../store/actions/changePasswordAction";
import changePhoneAction from "../../store/actions/changePhoneAction";
import changeEmailAction from "../../store/actions/changeEmailAction";
import changeDateAction from "../../store/actions/changeDateAction";
import {useDispatch, useSelector} from "react-redux";
import toggleFormAction from "../../store/actions/toggleFormAction";
import signUpRequestAction from "../../store/actions/signUpRequestAction";
import signInRequestAction from "../../store/actions/signInRequestAction";
import Button from "../Button/Button";
const Registration = () => {
    const dispatch=useDispatch()
    const file=useSelector(state=>state.form.imageAvatar)
    const login=useSelector(state=>state.form.login)
    const password=useSelector(state=>state.form.password)
    const phone=useSelector(state=>state.form.phone)
    const email=useSelector(state=>state.form.email)
    const date=useSelector(state=>state.form.date)
    return (
        <div className={styles.data}>
            <div className={styles.image}>
                <input type="file" id='file-input' onChange={e=>dispatch(addFileAction(e.target.files[0]))}
                       accept='image/png, image/jpeg'/>
                <label className={styles.addFile} htmlFor="file-input">
                    {file? <img className={styles.avatar} src={file} alt="addFile"/>:<img src={logo} alt="addFile"/> }
                </label>
            </div>
            <div className={styles.wrapper}>
                <input type="text" value={login} onChange={e=>dispatch(changeLoginAction(e.target.value))}
                       placeholder='Ваше имя'/>
                <input type="password" value={password} onChange={e=>dispatch(changePasswordAction(e.target.value))}
                       placeholder='Ваше пароль'/>
            </div>
            <div className={styles.wrapper}>
                <input type="tele" value={phone} onChange={e=>dispatch(changePhoneAction(e.target.value))}
                       placeholder='Ваше телефон'/>
                <input type="email" value={email} onChange={e=>dispatch(changeEmailAction(e.target.value))}
                       placeholder='Ваше email'/>
            </div>
            <input className={styles.data} value={date} onChange={e=>dispatch(changeDateAction(e.target.value))}
                   type="date" />
            <Button text='Зарегистрироваться' dispatch={dispatch} action={signUpRequestAction}/>
            <button onClick={()=>dispatch(toggleFormAction('signIn'))} className={styles.signIn}>Войти</button>
        </div>
    );
};

export default Registration;