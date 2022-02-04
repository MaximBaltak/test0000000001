import React from 'react';
import styles from './Content.module.scss'
import User from "../User/User";
import {useSelector} from "react-redux";

const Content = () => {
    const authorization=useSelector(state=>state.user.authorization)
    return (
        <div className={styles.content}>
            {authorization? <User/>:<p className={styles.text}>Для просмотра профиля авторизуйтесь</p>}
        </div>
    );
};

export default Content;