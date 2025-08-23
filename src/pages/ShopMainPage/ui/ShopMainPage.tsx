import styles from './shopMain.module.scss';
import pht1 from '@shared/images/shop/IMG_6003.png';
import pht2 from '@shared/images/shop/IMG_5997.png';

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
        </div>
    )
}
