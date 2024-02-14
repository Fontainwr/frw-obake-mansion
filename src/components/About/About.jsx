import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img
            src={getImageUrl("hero/herImage.jpg")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                <div className={styles.aboutItemText}>
                <h3>Services </h3>
                <p>
                    We provide serves such as Animation, storybaord, Scripts, and directions. 
                </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="Server icon" />
                <div className={styles.aboutItemText}>
                <h3>Partners</h3>
                <p>
                    We have experience developing projects with companies such as Double Fine...
                </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
                <div className={styles.aboutItemText}>
                <h3>Works</h3>
                <p>
                    We have designed multiple games and animations.
                </p>
                </div>
            </li>
            </ul>
        </div>
    </section>
    );
};