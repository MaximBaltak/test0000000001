import React from 'react';
import styles from './Form.module.scss'
import Registration from "../Registration/Registration";
import {useDispatch, useSelector} from "react-redux";
import Authorization from "../Authorization/Authorization";
import Button from "../Button/Button";
import exitAction from "../../store/actions/exitAction";
const Form = () => {
    const dispatch=useDispatch()
    const toggleForm=useSelector(state=>state.form.toggleForm)
    return (
        <div className={styles.form}>
            {toggleForm==='signUp'? <Registration/>:toggleForm==='signIn'? <Authorization/>:
            <Button text='Выйти' dispatch={dispatch} action={exitAction}/>}
        </div>
    );
};

export default Form;