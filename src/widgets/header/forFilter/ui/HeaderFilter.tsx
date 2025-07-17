import { useEffect, useState } from 'react';
import styles from './filter.module.scss';

export const HeaderFilter = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <a href="#">история</a>
                <a href="#">основатели</a>
                <a href="#">магазин</a>
                <a href="#">адрес</a>
                <a href="#">контакты</a>
            </nav>
        </header>
    );
};
