import React from 'react';
import styles from './index.module.scss';
import register_phone from '../../assets/register-phone.png';
import explore_phone from '../../assets/explore-phone.png';
import checkout_phone from '../../assets/checkout-phone.png';

const AboutSection = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.top_line_topic}>
                    <h2>How the app works</h2>
                </div>
                <div className={styles.account_section}>
                    <div className={styles.account_image}>
                        <img src={register_phone} alt="register phone"/>
                    </div>
                    <div className={styles.account_text}>
                        <h4>Create an account</h4>
                        <h2>Create/login to an existing account to get started</h2>
                        <p>An account is created with your email and a desired password</p>
                    </div>
                </div>
                <div className={styles.account_section}>
                    <div className={styles.account_text}>
                        <h4>Create an account</h4>
                        <h2>Create/login to an existing account to get started</h2>
                        <p>An account is created with your email and a desired password</p>
                    </div>
                    <div className={styles.account_image}>
                        <img src={explore_phone} alt="explore phone"/>
                    </div>
                </div>
                <div className={styles.account_section}>
                    <div className={styles.account_image}>
                        <img src={checkout_phone} alt="checkout phone"/>
                    </div>
                    <div className={styles.account_text}>
                        <h4>Create an account</h4>
                        <h2>Create/login to an existing account to get started</h2>
                        <p>An account is created with your email and a desired password</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;