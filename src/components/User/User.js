import React, {useEffect} from 'react';
import styles from './User.module.scss'
import {useDispatch, useSelector} from "react-redux";
import getUserRequestAction from "../../store/actions/getUserRequestAction";
const User = () => {
    const dispatch=useDispatch()
    const avatar=useSelector(state=>state.user.imageAvatar)
    const name=useSelector(state=>state.user.name)
    const date=useSelector(state=>state.user.date)
    const dateRegistration=useSelector(state=>state.user.dateRegistration)
    const phone=useSelector(state=>state.user.phone)
    const email=useSelector(state=>state.user.email)
    useEffect(()=>{
        dispatch(getUserRequestAction())
    },[])
    return (
        <div className={styles.user}>
            <div className={styles.info}>
               <img className={styles.avatar} src={avatar} alt="avatar"/>
                <p className={styles.text}>{date}</p>
            </div>
            <div className={styles.info}>
                <p className={styles.text}>{name}</p>
                <p className={styles.text}>{phone}</p>
                <p className={styles.text}>{email}</p>
            </div>
            <p className={styles.registr}>Регистрация: {dateRegistration}</p>
        </div>
    );
};

export default User;