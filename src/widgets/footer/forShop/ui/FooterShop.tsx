import styles from './shop.module.scss';

export const FooterShop = () => {
    return (
        <footer className={styles.container} id="contact">
            <div className={styles.mottoWrapper}>
                <span className={styles.motto}>Filter.dept</span>
            </div>

            <div className={styles.columns}>
                <div className={styles.column}>
                    <span className={styles.title}>мы в интернете</span>
                    <span className={styles.text}>inst</span>
                    <span className={styles.text}>telegram</span>
                </div>

                <div className={styles.column}>
                    <span className={styles.title}>контакты</span>
                    <span className={styles.text}>89249282104</span>
                    <span className={styles.text}>@filter</span>
                    <span className={styles.text}>help@filter.ru</span>
                </div>

                <div className={styles.column}>
                    <span className={styles.title}>адреса</span>
                    <span className={styles.text}>ул. Мусина, 43</span>
                    <span className={styles.text}>ул. Щапово, 1а</span>
                </div>
            </div>

            <div className={styles.bottomRow}>
                <div className={styles.copyright}>
                    <span>© Все права защищены</span>
                </div>
            </div>
        </footer>
    );
};
