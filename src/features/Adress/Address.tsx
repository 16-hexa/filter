import styles from './adress.module.scss';
import image1 from '@shared/images/spots/image.png';
import image2 from '@shared/images/spots/image-2.png';
import image3 from '@shared/images/spots/image-1.png';

export const Address = () => {
    return(
        <div className={styles.container}>
            <h2 className={styles.spots}>Наши споты</h2>

            <div className={styles.photo_container}>

                <div className={styles.item}>
                    <img className={styles.img} src={image1}/>
                    <p className={styles.adress}>ул. Габдуллы Тукая, 71</p>
                </div>

                <div className={styles.item}>
                    <img className={styles.img} src={image2}/>
                    <p className={styles.adress}>ул. Шаляпина, 26</p>
                </div>

                <div className={styles.item}>
                    <img className={styles.img} src={image3}/>
                    <p className={styles.adress}>ул. Чернышевского, 17</p>
                </div>

            </div>
        </div>
    )
}