import styles from './style.module.scss';
import closeIcon from '@shared/images/popup/closeIcon.png';
import {CollorList} from "@/widgets";

type PopupSideMenuProps = {
    onClose: () => void;
};

export const PopupSideMenu = ({ onClose }: PopupSideMenuProps) => {
    return (
        <div className={styles.container}>
            <img
                src={closeIcon}
                alt="Закрыть"
                className={styles.closeIcon}
                onClick={onClose}
            />

            <div className={styles.content}>
                <p className={styles.title}>фильтр</p>

                <div className={styles.filter_container}>
                    <section>
                        <p className={styles.title}>цвет</p>
                        <CollorList />
                    </section>

                    <section>
                        <p className={styles.title}>тип</p>
                        <p className={styles.text}>
                            футболка / худи / головной убор / джинсы / юбка / джинсы
                        </p>
                    </section>

                    <section>
                        <p className={styles.title}>коллекция</p>
                        <p className={styles.text}>
                            mon / fry / dh kolp / weryk / vbeg
                        </p>
                    </section>

                    <section>
                        <p className={styles.title}>размер</p>
                    </section>
                </div>

                <div className={styles.buttons}>
                    <button className={styles.button}>Очистить</button>
                    <button className={styles.button}>Применить</button>
                </div>
            </div>
        </div>
    );
};
