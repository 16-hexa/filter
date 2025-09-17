import styles from './item.module.scss'
import {FooterShop, Shortheader} from "@/widgets";
import item from '@shared/images/shop/IMG_6008.png';
import head from "@shared/images/shop/ChatGPT Image 9 июня 2025 г., 20_10_15 3.png";
import hoodie from "@shared/images/shop/ChatGPT Image 9 июня 2025 г., 20_10_15 2.png";
import zips from "@shared/images/shop/ChatGPT Image 9 июня 2025 г., 20_10_15 1.png";
import sweaters from "@shared/images/shop/ChatGPT Image 9 июня 2025 г., 20_10_15 4.png";

const categories = [
    { img: head, label: "1" },
    { img: hoodie, label: "2" },
    { img: zips, label: "3" },
    { img: sweaters, label: "4" },
];

export const ItemPage = () => {
    return(
        <div className={styles.container}>
            <Shortheader />
            <main>
                <div className={styles.info}>
                    <div className={styles.left}>
                        <img src={item} className={styles.photo} />
                    </div>

                    <div className={styles.right}>
                        <p className={styles.desc}>Shrimp Logo Boxy T-Shirt in soft white cotton jersey for Women is from look 14 of the Shrimp Collection.</p>
                        <p className={styles.values}>SIZE: XS/S/M/L/XL</p>
                        <p className={styles.values}>MANUFACTURER: Russia</p>
                        <p className={styles.values}>FABRIC WEIGHT: 180 g/m²</p>
                        <p className={styles.values}>CARE INSTRUCTIONS: Machine wash cold, do not bleach, tumble dry low, iron on reverse side if needed.</p>
                        <p className={styles.values}>AVAILABLE AT: 12 Baumana Street, Kazan / 8 Pushkina Street, Kazan</p>

                        <h3 className={styles.name}>Shrimp collection/T-shirts/women/</h3>
                    </div>
                </div>

                <div className={styles.category_information}>
                    {categories.map((item, index) => (
                        <div key={index}>
                            <img src={item.img} className={styles.category_photo} alt={item.label} />
                            <p className={styles.clothes}>{item.label}</p>
                        </div>
                    ))}
                </div>
            </main>
            <FooterShop />
        </div>
    )
}