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
            </div>
        </div>
    );
};
