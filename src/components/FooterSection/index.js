import React from 'react';
import styles from './index.module.scss';
import logo from '../../assets/bella-logo.svg';
import twitter_icon from '../../assets/twitter-icon.svg';
import facebook_icon from '../../assets/facebook-icon.svg';
import instagram_icon from '../../assets/instagram-icon.svg';

const FooterSection = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo} alt=""/>
                </div>
                <div className={styles.social_media}>
                    <img src={twitter_icon} alt="twitter icon"/>
                    <img src={facebook_icon} alt="facebook icon"/>
                    <img src={instagram_icon} alt="instagram icon"/>
                </div>
                <div className={styles.copyright}>
                    <p>Copyright 2020 Bella Onojie.com</p>
                </div>
            </div>
        </div>
    )
}

export default FooterSection