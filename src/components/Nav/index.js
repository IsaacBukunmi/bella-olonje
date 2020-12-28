import React from 'react';
import styles from './index.module.scss';
import bella_logo from '../../assets/bella-logo.svg'

const Nav = () => {
    return(
        <div className={styles._}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={bella_logo} alt="bella logo"/>
                </div>
                <div className={styles.nav_list}>
                    <ul>
                        <li>Home</li>
                        <li>Product</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav;