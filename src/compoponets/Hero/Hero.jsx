import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
            <section className={styles.container}> 
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Miyuki Richardson </h1>
                    <p className={styles.description}>
                    I own the Obake Mansion company. Please reach out to the company
                    </p>
                    <a href="mailto:maruyama.miyuki@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
                <img src={getImageUrl("hero/herImage.jpg")} alt="Hero image of me" className={styles.heroImg} />
                    <div className={styles.topBlur} />
                    <div className={styles.bottomBlur} />
    </section>
    );
};

export default Hero