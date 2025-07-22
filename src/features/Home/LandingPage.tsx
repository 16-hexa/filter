import React from 'react';
import styles from './landingPage.module.scss';
import {MusicPlayer} from "@shared/components";
import graffiti from '@shared/images/logo/filter.png'

export const LandingPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textTopLeft}>Welcome</div>

            <img
                src={graffiti}
                alt="graffiti"
                className={styles.graffiti}
            />

            <div className={styles.textBottomRight}>Menu</div>

            <MusicPlayer />
        </div>
    );
};
