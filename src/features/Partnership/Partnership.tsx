import styles from './partnership.module.scss';
import back from '@shared/images/back/back.png';
import {useState} from "react";

export const Partnership = () => {
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        console.log('Отправлено:', message);
        setMessage('');
    };

    return (
        <div className={styles.container} id="part">
            <div className={styles.backgroundText}>Partnership</div>

            <img
                src={back}
                alt="decorative line"
                className={styles.back}
            />

            <div className={styles.formWrapper}>
                <h3>Есть идеи,<br />с которыми ты готов поделиться?</h3>
                <p>Напиши об этом!</p>

                <textarea
                    placeholder="Ваши идеи, предложения"
                    className={styles.textarea}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button className={styles.button} onClick={handleSubmit}>
                    Отправить
                </button>
            </div>
        </div>
    );
};
