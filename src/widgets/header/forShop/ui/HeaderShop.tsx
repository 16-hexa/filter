import styles from './shop.module.scss';
import {useEffect, useState} from "react";
import {PopupHeader} from "@shared/components";

export const HeaderShop = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);

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

            if (elapsed < duration) requestAnimationFrame(scrollStep);
        }

        requestAnimationFrame(scrollStep);
    };

    const handleClick = (name: string, cb?: () => void) => {
        setActiveLink(name);
        if (cb) cb();
    };

    const openPopup = () => setIsPopupOpen(true);

    const closePopup = () => {
        setIsPopupOpen(false);
        setActiveLink(null);
    };

    return (
        <>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <nav className={styles.nav}>
                    <a
                        onClick={() => handleClick('women', openPopup)}
                        className={activeLink === 'women' ? styles.active : ''}
                    >женщины</a>

                    <a
                        onClick={() => handleClick('men', openPopup)}
                        className={activeLink === 'men' ? styles.active : ''}
                    >мужчины</a>

                    <a
                        onClick={() => handleClick('new')}
                        className={activeLink === 'new' ? styles.active : ''}
                    >новинки</a>

                    <a
                        onClick={() => handleClick('categories', openPopup)}
                        className={activeLink === 'categories' ? styles.active : ''}
                    >категории</a>

                    <a
                        onClick={() => {
                            handleClick('search');
                            smoothScrollTo('contact', 100);
                        }}
                        className={activeLink === 'search' ? styles.active : ''}
                    >поиск</a>
                </nav>
            </header>

            {isPopupOpen && <PopupHeader onClose={closePopup} />}
        </>
    );
};