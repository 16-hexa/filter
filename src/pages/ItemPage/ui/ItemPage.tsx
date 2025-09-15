import styles from './item.module.scss'
import {FooterShop, Shortheader} from "@/widgets";
import item from '@shared/images/shop/IMG_6008.png';

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
                        <p>Shrimp Logo Boxy T-Shirt in soft white cotton jersey for Women is from look 14 of the Shrimp Collection.</p>
                        <p><b>SIZE:</b> XS/S/M/L/XL</p>
                        <p><b>MANUFACTURER:</b> Russia</p>
                        <p><b>FABRIC WEIGHT:</b> 180 g/m²</p>
                        <p><b>CARE INSTRUCTIONS:</b> Machine wash cold, do not bleach, tumble dry low, iron on reverse side if needed.</p>
                        <p><b>AVAILABLE AT:</b> 12 Baumana Street, Kazan / 8 Pushkina Street, Kazan</p>

                        <h3>Shrimp collection/T-shirts/women/</h3>
                    </div>
                </div>
            </main>
            <FooterShop />
        </div>
    )
}