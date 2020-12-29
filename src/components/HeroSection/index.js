import React from 'react';
import styles from './index.module.scss';
import mobile_showcase from '../../assets/two-mobile.png';
import { motion } from 'framer-motion'; 



const pathVariants = {
    hidden: {
        opacity:0,
        pathLenght:0
    },
    visible: {
        opacity:1,
        pathLenght:1,
        transition:{
            duration:2,
            ease:"easeInOut"
        }
    }
}

const heroTextVaraints = {
    hidden:{
        opacity:0,
        scale:.5
    },
    visible:{
        opacity:1,
        scale:1,
        transition:{
            ease:'easeOut',
            duration:1
        }
    }
}

const smallTextVaraints = {
    hidden:{
        y:'-100vh'
    },
    visible:{
        y:0,
        
        transition:{
            type:'spring',
            stiffness:30,
            delay:2,
            duration:.2,
            ease:'easeInOut'
        }
    }

}

const buttonContainerVaraints = {
    hidden:{
        x:'-100vw'
    },
    visible:{
        x:0,
        
        transition:{
            type:'spring',
            stiffness:120,
            delay:1,
        }
    }

}

const appShowcaseVaraints = {
    hidden:{
        y:'10vh',
        opacity:0,
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            type:'spring',
            stiffness:120,
            delay:3,
            duration:0.5,
             y: {
                yoyo:Infinity,
                duration:2,
                ease:'easeInOut',
             }
        }
    }
}



const HeroSection = () => {
    return(
        <>
            <div className={styles._}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <motion.h4
                            variants={smallTextVaraints}
                            initial="hidden"
                            animate="visible"
                        >Food App</motion.h4>
                        <motion.h1
                            variants={heroTextVaraints}
                            initial="hidden"
                            animate="visible"
                        >Why stay hungry when you can order from Bella Olounje</motion.h1>
                        <motion.p
                            variants={buttonContainerVaraints}
                            initial="hidden"
                            animate="visible"
                        >Download the Bella Olounje Food App now on</motion.p>
                        <motion.div className={styles.button_container}
                            variants={buttonContainerVaraints}
                            initial="hidden"
                            animate="visible"
                        >
                            <button className={styles.playstore}>
                                Playstore
                            </button>
                            <button className={styles.appstore}>
                                App Store
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div className={styles.app_showcase}
                variants={appShowcaseVaraints}
                initial="hidden"
                animate="visible"
            >
                <motion.div className={styles.app_images}>
                    <img src={mobile_showcase} alt="mobile showcase"/>
                </motion.div>
            </motion.div>
        </>
    )
}

export default HeroSection;