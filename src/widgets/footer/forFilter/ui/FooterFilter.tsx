import styles from './filter.module.scss';
import { Link } from 'react-router-dom';
import logo from '@shared/images/vector/vector.svg';

export const FooterFilter = () => {
    
    return (
        <footer className={styles.container}>
            <div className={styles.mottoWrapper}>
                <span className={styles.motto}>coffee is my love</span>
            </div>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <Link to='/employment' className={styles.link}>
                        Трудоустройство
                    </Link>
                    <Link to='/collab' className={styles.link}>
                        Сотрудничество
                    </Link>
                </div>

                <div className={styles.column}>
                    <Link to='/bonus' className={styles.link}>
                        Бонусная программа
                    </Link>
                </div>

                <div className={styles.column}>
                    <Link to='/shop' className={styles.link}>
                        FILTER Shop
                    </Link>
                </div>

                <div className={styles.newsletter}>
                    <p className={styles.send}>Рассылка</p>
                    <input type="email" placeholder="Email" className={styles.emailInput} />
                </div>
            </div>


            <div className={styles.bottomRow}>

                <div className={styles.copyright}>
                    <span>© 2025 </span>
                    <Link to="/brand" className={styles.brandLink}>
                        <span className={styles.brand}>16hexa</span>
                        <img src={logo} className={styles.logo} />
                    </Link>
                </div>

                <div className={styles.links}>
                    <a href="#">Политика в отношении обработки персональных данных</a>
                    <a href="#">Пользовательское соглашение</a>
                </div>
            </div>
        </footer>
    );
};

