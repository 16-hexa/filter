import styles from './style.module.scss';
import closeIcon from '@shared/images/popup/closeIcon.png';
import {CollorList} from "@/widgets";
import {useState} from "react";

type PopupSideMenuProps = {
    onClose: () => void;
};

const sizes = [34, 35, 36, 37, 38, 39, 40, 'xs', 's', 'm', 'l', 'xl'];

export const PopupSideMenu = ({ onClose }: PopupSideMenuProps) => {
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

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
                        <div className={styles.grid}>
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`${styles.sizeButton} ${
                                        selectedSize === size ? styles.active : ""
                                    }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
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
