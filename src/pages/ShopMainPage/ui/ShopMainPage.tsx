import styles from './shopMain.module.scss';

export const ShopMainPage = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.background}></div>
                <p className={styles.title}>Filter.dept</p>
            </div>

            <div className={styles.color1}></div>
            <div className={styles.color2}></div>
            <div className={styles.color3}></div>
            <div className={styles.color4}></div>
            <div className={styles.color5}></div>
            <div className={styles.color6}></div>

        </div>
    )
}
