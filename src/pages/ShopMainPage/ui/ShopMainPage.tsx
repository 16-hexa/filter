import styles from './shopMain.module.scss';
import pht1 from '@shared/images/shop/IMG_6003.png';
import pht2 from '@shared/images/shop/IMG_5997.png';
import head from '@shared/images/shop/IMG_6006.png';
import hoodie from '@shared/images/shop/IMG_5970.png';
import zips from '@shared/images/shop/IMG_6008.png';
import sweaters from '@shared/images/shop/IMG_6009.png'

export const ShopMainPage = () => {
    return (
        <div className={styles.main_cointainer}>
            <div className={styles.container}>
                <div className={styles.background}></div>
                <p className={styles.title}>Filter.dept</p>
            </div>

            <div className={styles.information}>
                <div className={styles.photo_container}>
                    <img src={pht1} className={styles.photo}/>
                    <img src={pht2} className={styles.photo}/>
                </div>

                <div className={styles.text_container}>
                    <p>THE NEW</p>
                    <p>WO-MEN COLLECTION</p>
                    <p>SUMMER 2025</p>
                </div>
            </div>

            <p className={styles.category}>категория</p>

            <div className={styles.category_information}>
                <div >
                    <img src={head} className={styles.category_photo} />
                    <p className={styles.clothes}>головной убор</p>
                </div>

                <div>
                    <img src={hoodie} className={styles.category_photo} />
                    <p className={styles.clothes}>худи</p>
                </div>

                <div>
                    <img src={zips} className={styles.category_photo} />
                    <p className={styles.clothes}>зипки</p>
                </div>

                <div>
                    <img src={sweaters} className={styles.category_photo} />
                    <p className={styles.clothes}>свитера</p>
                </div>
            </div>
        </div>
    )
}
