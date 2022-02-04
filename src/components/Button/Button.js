import React from 'react';
import styles from './Button.module.scss'
const Button = ({text,dispatch,action,arg}) =>
    <button className={styles.signUp} onClick={()=>dispatch(action(arg))}>{text}</button>

export default Button;