import styles from './catalog.module.scss';
import mainPhoto from '@shared/images/shop/catalog_main_photo.png'

export const Catalog = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <img
                    src={mainPhoto}
                    className={styles.photo}
                />

                <p className={styles.logo}>Filter.dept</p>
            </div>

            <div className={styles.filter_container}>
                <button className={styles.button_filter}>
                    фильтр
                </button>

                <button className={styles.button_filter}>
                    сортировать по возрастанию цены
                </button>
            </div>

            <div>
                болею я не хочу делать камиты
            </div>
        </div>
    )
}