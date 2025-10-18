import styles from './style.module.scss';
import closeIcon from '@shared/images/popup/closeIcon.png';

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
                    </section>

                    <section>
                        <p className={styles.title}>тип</p>
                    </section>

                    <section>
                        <p className={styles.title}>коллекция</p>
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
