import React from 'react';
import styles from './index.module.scss';

const DownloadSection = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div class={styles.content}>
                    <h2>Download the app now</h2>
                    <p>Available on your favourite store. Start your premium experience now</p> 
                    <div className={styles.button_container}>
                        <button className={styles.playstore}>Playstore</button>
                        <button className={styles.appstore}>Appstore</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadSection;