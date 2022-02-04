import React from 'react';
import styles from './Authorization.module.scss'
import changePasswordAction from "../../store/actions/changePasswordAction";
import changePhoneAction from "../../store/actions/changePhoneAction";
import {useDispatch, useSelector} from "react-redux";
import toggleFormAction from "../../store/actions/toggleFormAction";
import signInRequestAction from "../../store/actions/signInRequestAction";
import Button from "../Button/Button";
const Authorization = () => {
    const dispatch=useDispatch()
    const password=useSelector(state=>state.form.password)
    const phone=useSelector(state=>state.form.phone)
    return (
        <div className={styles.data}>
            <div className={styles.wrapper}>
                <input type="tele" value={phone} onChange={e=>dispatch(changePhoneAction(e.target.value))}
                       placeholder='Ваше телефон'/>
                <input type="password" value={password} onChange={e=>dispatch(changePasswordAction(e.target.value))}
                       placeholder='Ваше пароль'/>
            </div>
            <Button text='Войти' dispatch={dispatch} action={signInRequestAction}/>
            <button onClick={()=>dispatch(toggleFormAction('signUp'))} className={styles.signIn}>Зарегистрироваться</button>
        </div>
    );
};

export default Authorization;