import styles from './popup.module.scss';
import closeIcon from "@shared/images/popup/closeIcon.png";

type PopupSideMenuProps = {
    onClose: () => void;
};

export const PopupHeader = ({ onClose }: PopupSideMenuProps) => {
    return(
        <>
            <div className={styles.overlay} onClick={onClose}/>
            <div className={styles.container}>
                <img
                    src={closeIcon}
                    alt="Закрыть"
                    className={styles.closeIcon}
                    onClick={onClose}
                />

                <div className={styles.content}>

                    <div className={styles.filter_container}>
                        <section>
                            <p className={styles.title}>коллекции</p>
                        </section>

                        <section>
                            <p className={styles.title}>одежда</p>
                        </section>

                        <section>
                            <p className={styles.title}>головные уборы</p>
                        </section>

                        <section>
                            <p className={styles.title}>аксессуары</p>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}