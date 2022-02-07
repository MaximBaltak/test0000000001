import React from 'react';
import styles from './Profile.module.scss'
import Form from "../../components/Form/Form";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
const Profile = () => {
    return (
        <div className={styles.profile}>
            <Header/>
            <div className={styles.content}>
                <Form/>
                <Content/>
            </div>
        </div>

    );
};

export default Profile;