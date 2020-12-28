import React from 'react';
import styles from './index.module.scss';
import mobile_showcase from '../../assets/two-mobile.png'


const HeroSection = () => {
    return(
        <>
            <div className={styles._}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h4>Food App</h4>
                        <h1>Why stay hungry when you can order from Bella Olounje</h1>
                        <p>Download the Bella Olounje Food App now on</p>
                        <div className={styles.button_container}>
                            <button className={styles.playstore}>
                                Playstore
                            </button>
                            <button className={styles.appstore}>
                                App Store
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.app_showcase}>
                <div className={styles.app_images}>
                    <img src={mobile_showcase} alt="mobile showcase"/>
                </div>
            </div>
        </>
    )
}

export default HeroSection;