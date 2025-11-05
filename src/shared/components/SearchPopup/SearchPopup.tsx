import { useState } from "react";
import styles from "./search.module.scss";
import closeIcon from "@shared/images/popup/closeIcon.png";

type PopupProps = {
    onClose: () => void;
};

export const SearchPopup = ({ onClose }: PopupProps) => {
    const [active, setActive] = useState<string | null>(null);

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />

            <div className={styles.container}>
                <img
                    src={closeIcon}
                    alt="Закрыть"
                    className={styles.closeIcon}
                    onClick={onClose}
                />

                <div className={styles.content}>
                    <p className={styles.title}>чаще всего ищут</p>

                    <div className={styles.filter_container}>
                        <p className={styles.title}>футболка  Filter Everything</p>
                        <p className={styles.title}>весна 2025</p>
                        <p className={styles.title}>Ryfo uip hip hop</p>
                        <p className={styles.title}>футболка  Filter Everything</p>
                    </div>
                </div>
            </div>
        </>
    );
};
