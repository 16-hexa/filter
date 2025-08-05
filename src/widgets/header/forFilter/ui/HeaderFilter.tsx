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

    const smoothScrollTo = (targetId: string, duration = 1000) => {
        const target = document.getElementById(targetId);
        if (!target) return;

        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + start;
        const distance = end - start;
        const startTime = performance.now();

        function scrollStep(currentTime: number) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeInOutQuad = progress < 0.5
                ? 2 * progress * progress
                : -1 + (4 - 2 * progress) * progress;

            window.scrollTo(0, start + distance * easeInOutQuad);

            if (elapsed < duration) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }


    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                <a onClick={() => smoothScrollTo('part', 100)}>предложения</a>
                <a onClick={() => smoothScrollTo('founder', 100)}>основатели</a>
                <a href="#">магазин</a>
                <a onClick={() => smoothScrollTo('adress', 100)}>адрес</a>
                <a href="#">контакты</a>
            </nav>
        </header>
    );
};
