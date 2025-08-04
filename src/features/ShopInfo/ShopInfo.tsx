import styles from './shopInfo.module.scss';
import image1 from '@shared/images/shop/Снимок экрана 2025-04-13 в 21.12.44 1.png';
import image2 from '@shared/images/shop/Снимок экрана 2025-04-13 в 21.12.09 1.png';
import decorativeLine from '@shared/images/vector/decorativeLine.svg';
import logo from "@shared/images/vector/vector.svg";
import {Link} from "react-router-dom";

export const ShopInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.backgroundText}>Shop</div>

            <img
                src={decorativeLine}
                alt="decorative line"
                className={styles.decorativeLine}
            />

            <div className={styles.content}>
                <div className={styles.images}>
                    <img src={image2} alt="shop 1"  className={styles.image} />
                    <img src={image1} alt="shop 2" className={styles.imageSmall} />
                </div>

                <div className={styles.description}>
                    <p>
                        <Link to="/shop" className={styles.brandLink}>
                            <span className={styles.brand}>Наш магазин</span>
                            <img src={logo} className={styles.logo} />
                        </Link>
                        — это не просто кофейня, а целая философия жизни,
                        воплощённая не только в чашке кофе, но и в стильной одежде под брендом Filter. Мы создаём вещи для
                        тех, кто ценит комфорт, качество и лаконичный дизайн. Наши худи, футболки, толстовки и аксессуары —
                        это продолжение атмосферы уюта и осознанности, которую мы вкладываем в каждую чашку кофе.
                    </p>
                </div>
            </div>
        </div>
    );
};
