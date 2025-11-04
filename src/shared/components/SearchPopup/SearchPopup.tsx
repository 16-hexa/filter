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

            <div className={`${styles.container} ${active ? styles.expanded : ""}`}>
                <img
                    src={closeIcon}
                    alt="Закрыть"
                    className={styles.closeIcon}
                    onClick={onClose}
                />

                <div className={styles.content}>
                    <div className={styles.columns}>
                        <div className={styles.leftCol}>
                            {Object.keys(menu).map(item => (
                                <p
                                    key={item}
                                    className={`${styles.title} ${active === item ? styles.active : ""}`}
                                    onClick={() => setActive(item)}
                                >
                                    {item}
                                </p>
                            ))}
                        </div>

                        {active && (
                            <div className={styles.rightCol}>
                                {menu[active].map(sub => (
                                    <p key={sub} className={styles.text}>
                                        {sub}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
