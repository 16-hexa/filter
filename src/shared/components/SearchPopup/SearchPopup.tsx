import { useState, type FC } from "react";
import styles from "./search.module.scss";
import closeIcon from "@shared/images/popup/closeIcon.png";

type SearchPopupProps = {
    onClose: () => void;
};

export const SearchPopup: FC<SearchPopupProps> = ({ onClose }) => {
    const [activeQuery, setActiveQuery] = useState<string | null>(null);

    return (
        <>
            <div className={styles.overlay} onClick={onClose} />

            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Что ищете"
                        className={styles.input}
                        value={activeQuery ?? ""}
                        onChange={(e) => setActiveQuery(e.target.value)}
                    />
                    <img
                        src={closeIcon}
                        alt="Закрыть"
                        className={styles.closeIcon}
                        onClick={onClose}
                    />
                </div>

                <div className={styles.content}>
                    <p className={styles.title}>Чаще всего ищут</p>

                    <div className={styles.filterContainer}>
                        {[
                            "футболка Filter Everything",
                            "весна 2025",
                            "Ryfo uip hip hop",
                            "футболка Filter Everything",
                        ].map((item, index) => (
                            <p key={index} className={styles.title}>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
